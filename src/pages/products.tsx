import React, { useState } from "react";
import { useGetProducts, useDeleteProduct } from "../hooks/data-hooks";
import { Product } from "../types";
import LoadingSpinner from "../components/loading-spinner";
import NoDataState from "../components/no-data-state";
import AddProductModal from "../components/add-product-modal";
import DeleteConfirmationModal from "../components/delete-confirmation-modal";
import { Trash2 } from "lucide-react";

const Products: React.FC = () => {
  const { data, isLoading } = useGetProducts();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    product: Product | null;
  }>({
    isOpen: false,
    product: null,
  });

  const deleteProduct = useDeleteProduct();

  const handleDelete = async () => {
    if (!deleteModalState.product) return;
    
    try {
      await deleteProduct.mutateAsync(deleteModalState.product.id);
      setDeleteModalState({ isOpen: false, product: null });
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data || data.length === 0) {
    return <NoDataState message="No products found" />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-3xl font-bold">Products</h4>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Product
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Capacity</th>
            <th className="text-left p-2">Category</th>
            <th className="text-right p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: Product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">{product.title}</td>
              <td className="p-2">{product.capacity}</td>
              <td className="p-2">{product.category.title}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => setDeleteModalState({ isOpen: true, product })}
                  className="text-red-500 hover:text-red-700"
                  title="Delete product"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddProductModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <DeleteConfirmationModal
        isOpen={deleteModalState.isOpen}
        onClose={() => setDeleteModalState({ isOpen: false, product: null })}
        onConfirm={handleDelete}
        itemName={deleteModalState.product?.title || ""}
        isLoading={deleteProduct.isLoading}
      />
    </div>
  );
};

export default Products;
