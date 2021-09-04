import React from "react";
import "../styles/components/CardContent.scss";

interface Props {
  textContent: string;
}

const CardContent = ({ textContent }: Props) => {
  return (
    <section className="section">
      <div className="section--message__container">
        <p className="section--message__container__message">{textContent}</p>
      </div>
    </section>
  );
};

export default CardContent;
