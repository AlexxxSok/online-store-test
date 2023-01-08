export interface ProductsInterface {
  id: string;
  name: string;
  image: string;
  company: string;
  discount: string;
  category: string;
  quantity: number;
  price: number;
  popular: string;
  images: string[];
}

export interface FilterInterface<T> {
  [key: string]: T[];
}
