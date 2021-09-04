import React from "react";
import "../styles/components/Breadcrumb.scss";

interface Props {
  categories: string[] | undefined;
}

const Breadcrumb = ({ categories }: Props) => {
  return (
    <ul className="breadcrumb" role="navigation" aria-label="Categorías">
      {categories?.map((category) => (
        <li className="breadcrumb__item" key={category.toString()}>
          {category.toString()}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
