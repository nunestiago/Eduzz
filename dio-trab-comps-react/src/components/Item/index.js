import React from "react";

function Item({ children }) {
  return (
    <div>
      <li className="list-group-item list-group-item-dark">{children}</li>
    </div>
  );
}

export default Item;
