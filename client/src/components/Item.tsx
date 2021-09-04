import React from "react";
import { Item } from "../interfaces/itemsInterface";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";
import "../styles/components/Item.scss";

type Props = {
  item: Item;
};

const CardItem = ({ item }: Props) => {
  return (
    <div className="item section-results__item">
      <Link
        to={`/items/${item.id}`}
        className="item__link item__link-image section-results__item__link-image"
      >
        <img src={item.picture} alt={item.title} className="item__thumb" />
      </Link>
      <div className="section-results__item__data-container">
        <h3 className="section-results__item__price item__price">
          {formatPrice(item.price.amount)}
          {item.free_shipping && (
            <span className="icon section-results__item__free-shipping-icon item__free-shipping-icon"></span>
          )}
        </h3>

        <Link
          className="item__link section-results__item__link-title"
          to={`/items/${item.id}`}
        >
          <h2 className="section-results__item__title item__title">
            {item.title}
          </h2>
        </Link>
        <label
          className="section-results__item__location item__location"
          aria-label="Ubicación"
        >
          {item.address}
        </label>
      </div>
    </div>
  );
};

export default CardItem;
