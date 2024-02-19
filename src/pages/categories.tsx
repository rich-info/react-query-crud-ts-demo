import React from "react";
import { useGetCategories } from "../hooks/data-hooks";
import { Category } from "../types";

const Categories: React.FC = () => {
  const { data, isLoading } = useGetCategories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h1>Categories</h1>
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
