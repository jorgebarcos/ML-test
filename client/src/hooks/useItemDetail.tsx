import { useEffect, useState } from "react";
import meliDB from "../api/meliDB";
import { ItemDetail } from "../interfaces/detailInterface";

interface Props {
  itemId: string;
}

const useItemDetail = ({ itemId }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [itemDetail, setItemDetail] = useState({} as ItemDetail);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await meliDB.get(`/items/${itemId}`);
        const item = response.data;
        setItemDetail(item);
        setIsLoading(false);

        const getCategories = await meliDB.get(
          `/categories/${item.category_id}`
        );
        const categories = getCategories.data;
        setItemDetail({ ...item, categories });
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, [itemId]);
  return {
    isLoading,
    itemDetail,
  };
};

export default useItemDetail;
