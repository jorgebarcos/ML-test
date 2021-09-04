export interface ItemDetail {
  id: string;
  title: string;
  price: Price;
  picture: string;
  free_shipping: boolean;
  address: null;
  condition: string;
  sold_quantity: number;
  category_id: string;
  description: string;
  author: Author;
  categories: string[];
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
