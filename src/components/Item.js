import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCart() {
    setInCart((inCart) => !inCart);
  }

  const inOrOut = inCart ? "in-cart" : "";

  return (
    <li className={inOrOut}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
