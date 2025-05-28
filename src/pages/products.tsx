import React from "react";
import { useGetProducts } from "../hooks/data-hooks";
import { Product } from "../types";
import LoadingSpinner from "../components/loading-spinner";
import NoDataState from "../components/no-data-state";

const Products: React.FC = () => {
  const { data, isLoading } = useGetProducts();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data || data.length === 0) {
    return <NoDataState message="No products found" />;
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
