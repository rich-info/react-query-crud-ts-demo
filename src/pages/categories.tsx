import React from "react";
import { useGetCategories } from "../hooks/data-hooks";
import { Category } from "../types";
import NoDataState from "../components/no-data-state";
import TableSkeleton from "../components/table-skeleton";

const Categories: React.FC = () => {
  const { data, isLoading } = useGetCategories();

  if (isLoading) {
    return <TableSkeleton />;
  }

  if (!data || data.length === 0) {
    return <NoDataState message="No products found" />;
  }

  return (
    <div>
      <h4 className="mb-2 text-3xl font-bold">Categories</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category: Category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
