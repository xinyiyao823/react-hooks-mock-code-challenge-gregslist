import React, { useState } from "react";

function ListingCard({id, description, image, location, handleDelete}) {
  const [favorite, setFavorite] = useState(false)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(!favorite)}className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(!favorite)}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => handleDelete(id)}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
