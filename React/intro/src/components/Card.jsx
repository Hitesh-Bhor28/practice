import React from "react";

const Card = ({item}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={item.thumbnail}
          alt="Charger SXT RWD"
        />
      </div>

      <div className="card-content">
        <h2>{item.title}</h2>

        <div className="price-section">
          <span className="original-price">{item.price}</span>
          <span className="discounted-price">{item.discountedTotal}</span>
        </div>

        <div className="details">
          <p><strong>Unit Price:</strong> $32,999.99</p>
          <p><strong>Quantity:</strong> 3</p>
        </div>

        <button className="btn">View Details</button>
      </div>
    </div>
  );
};

export default Card;
