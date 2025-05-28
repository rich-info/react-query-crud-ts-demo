import React, { useState } from "react";
import { useCreateProduct, useGetCategories } from "../hooks/data-hooks";
import { Product, Category } from "../types";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [manufacturingYear, setManufacturingYear] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");
  
  const createProduct = useCreateProduct();
  const { data: categories } = useGetCategories();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !description.trim() || !capacity.trim() || !manufacturingYear.trim() || !categoryId) {
      setError("All fields are required");
      return;
    }

    const selectedCategory = categories?.find((cat: Category) => cat.id === parseInt(categoryId));
    if (!selectedCategory) {
      setError("Please select a valid category");
      return;
    }

    try {
      const newProduct: Product = {
        id: 0, // The server will assign the actual ID
        title: title.trim(),
        description: description.trim(),
        capacity: capacity.trim(),
        manufacturingYear: parseInt(manufacturingYear),
        category: selectedCategory
      };

      await createProduct.mutateAsync(newProduct);
      setTitle("");
      setDescription("");
      setCapacity("");
      setManufacturingYear("");
      setCategoryId("");
      onClose();
    } catch (err) {
      setError("Failed to create product");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black p-6 rounded-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter product description"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Capacity</label>
            <input
              type="text"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter product capacity (e.g., 64GB)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Manufacturing Year</label>
            <input
              type="number"
              value={manufacturingYear}
              onChange={(e) => setManufacturingYear(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter manufacturing year"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select a category</option>
              {categories?.map((category: Category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={createProduct.isLoading}
            >
              {createProduct.isLoading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal; 