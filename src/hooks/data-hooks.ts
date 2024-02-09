import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { Category, Product } from "../types";

const apiConfig = {
  categories: {
    url: import.meta.env.VITE_API_URL + "categories",
    key: "categories",
  },
  products: {
    url: import.meta.env.VITE_API_URL + "products",
    key: "products",
  },
};

export const useGetCategories = () => {
  return useQuery(apiConfig.categories.key, async () => {
    const response = await axios.get(apiConfig.categories.url);
    return response.data;
  });
};

export const useCreateCategory = () => {
  return useMutation((category: Category) =>
    axios.post(apiConfig.categories.url, category),
  );
};

export const useUpdateCategory = () => {
  return useMutation((category: Category) =>
    axios.put(`${apiConfig.categories.url}/${category.id}`, category),
  );
};

export const useDeleteCategory = () => {
  return useMutation((categoryId: number) =>
    axios.delete(`${apiConfig.categories.url}/${categoryId}`),
  );
};

export const useGetProducts = () => {
  return useQuery(apiConfig.products.key, async () => {
    const response = await axios.get(apiConfig.products.url);
    return response.data;
  });
};

export const useCreateProduct = () => {
  return useMutation((product: Product) =>
    axios.post(apiConfig.products.url, product),
  );
};

export const useUpdateProduct = () => {
  return useMutation((product: Product) =>
    axios.put(`${apiConfig.products.url}/${product.id}`, product),
  );
};

export const useDeleteProduct = () => {
  return useMutation((productId: number) =>
    axios.delete(`${apiConfig.products.url}/${productId}`),
  );
};
