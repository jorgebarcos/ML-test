import React from "react";
import { formatPrice } from "../utils/formatPrice";
import { ItemDetail } from "../interfaces/detailInterface";
import "../styles/components/DetailContent.scss";

interface Props {
  itemDetail: ItemDetail;
}

const DetailContent = ({ itemDetail }: Props) => {
  return (
    <section className="section section--item-detail">
      <article className="item item-detail">
        <div className="item-detail__image-container">
          <img
            className="item-detail__image-container__image"
            src={itemDetail.picture}
            alt={itemDetail.title}
          />
        </div>
        <div className="item-detail__data-container">
          <label className="item-detail__other-data">
            {itemDetail?.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {itemDetail.sold_quantity} vendidos
          </label>
          {itemDetail.address && (
            <label className="item-detail__other-data">
              {itemDetail.address}
            </label>
          )}
          <h1 className="item-detail__title" title={itemDetail.title}>
            {itemDetail.title}
          </h1>
          <h3 className="item-detail__price" aria-label="Precio">
            {formatPrice(itemDetail.price.amount)}
          </h3>
          {itemDetail.free_shipping && (
            <label
              className="item-detail__other-data item-detail__other-data--free-shipping"
              aria-label="Incluye envío gratis"
            >
              Envío gratis
            </label>
          )}
          <button
            className="button button--primary button--block"
            type="button"
          >
            Comprar
          </button>
        </div>
        <div className="item-detail__description-container">
          <h2 className="item-detail__description-title">
            Descripción del producto
          </h2>
          <p className="item-detail__description">
            {itemDetail.description
              ? itemDetail.description
              : "Sin descripción."}
          </p>
        </div>
      </article>
    </section>
  );
};

export default DetailContent;
