import { useParams } from "react-router";
import useItemDetail from "../hooks/useItemDetail";
import { Helmet } from "react-helmet";

import LoadingSpinner from "../components/LoadingSpinner";
import Breadcrumb from "../components/Breadcrumb";
import DetailContent from "../components/DetailContent";

type IdParam = {
  id: string;
};

const DetailPage = () => {
  const { id } = useParams<IdParam>();
  const { isLoading, itemDetail } = useItemDetail({ itemId: id });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>{`${itemDetail?.title} | Mercado Libre`}</title>
      </Helmet>
      <Breadcrumb categories={itemDetail.categories} />
      <DetailContent itemDetail={itemDetail} />
    </>
  );
};

export default DetailPage;
