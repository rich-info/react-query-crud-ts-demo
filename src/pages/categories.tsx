import React, { useState } from "react";
import { useGetCategories, useDeleteCategory } from "../hooks/data-hooks";
import { Category } from "../types";
import NoDataState from "../components/no-data-state";
import TableSkeleton from "../components/table-skeleton";
import AddCategoryModal from "../components/add-category-modal";
import DeleteConfirmationModal from "../components/delete-confirmation-modal";
import { Trash2 } from "lucide-react";

const Categories: React.FC = () => {
  const { data, isLoading } = useGetCategories();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    category: Category | null;
  }>({
    isOpen: false,
    category: null,
  });

  const deleteCategory = useDeleteCategory();

  const handleDelete = async () => {
    if (!deleteModalState.category) return;
    
    try {
      await deleteCategory.mutateAsync(deleteModalState.category.id);
      setDeleteModalState({ isOpen: false, category: null });
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  if (isLoading) {
    return <TableSkeleton />;
  }

  if (!data || data.length === 0) {
    return <NoDataState message="No products found" />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-3xl font-bold">Categories</h4>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Category
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">ID</th>
            <th className="text-left p-2">Name</th>
            <th className="text-right p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category: Category) => (
            <tr key={category.id} className="border-t">
              <td className="p-2">{category.id}</td>
              <td className="p-2">{category.title}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => setDeleteModalState({ isOpen: true, category })}
                  className="text-red-500 hover:text-red-700"
                  title="Delete category"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddCategoryModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <DeleteConfirmationModal
        isOpen={deleteModalState.isOpen}
        onClose={() => setDeleteModalState({ isOpen: false, category: null })}
        onConfirm={handleDelete}
        itemName={deleteModalState.category?.title || ""}
        isLoading={deleteCategory.isLoading}
      />
    </div>
  );
};

export default Categories;
