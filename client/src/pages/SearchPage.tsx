import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Item from "../components/Item";
import useItemsList from "../hooks/useItemsList";
import LoadingSpinner from "../components/LoadingSpinner";
import Breadcrumb from "../components/Breadcrumb";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const { isLoading, itemList } = useItemsList({
    query: searchQuery,
  });
  const { search } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(search).get("search");
    setSearchQuery(query);
  }, [search, searchQuery]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>{`${searchQuery} | Mercado Libre`}</title>
      </Helmet>
      <Breadcrumb categories={itemList?.categories} />
      <section className="section">
        {itemList?.items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </section>
    </>
  );
};

export default SearchPage;
