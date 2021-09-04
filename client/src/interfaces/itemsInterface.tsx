export interface ItemList {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  free_shipping: boolean;
  address: string;
  condition: string;
  sold_quantity: number;
  category_id: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
