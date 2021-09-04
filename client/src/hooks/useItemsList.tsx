import { useEffect, useState } from "react";
import meliDB from "../api/meliDB";
import { ItemList } from "../interfaces/itemsInterface";

interface Props {
  query: string | null;
}

const useItemsList = ({ query }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [itemList, setItemList] = useState<ItemList | null>(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        const resp = await meliDB.get(`/items?q=${query}`);
        const items = resp.data;
        setItemList(items);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, [query]);

  return {
    isLoading,
    itemList,
  };
};

export default useItemsList;
