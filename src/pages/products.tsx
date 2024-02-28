import React from "react";
import { useGetProducts } from "../hooks/data-hooks";
import { Product } from "../types";

const Products: React.FC = () => {
  const { data, isLoading } = useGetProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h4 className="mb-2 text-3xl font-bold">Products</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: Product) => (
            <tr key={product.title}>
              <td>{product.title}</td>
              <td>{product.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
