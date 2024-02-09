export type Category = {
  id: number;
  title: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  capacity: string;
  manufacturingYear: number;
  category: Category;
};
