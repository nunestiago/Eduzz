import React, { useState } from "react";
import Button from "../Button";

function Card() {
  const [num, setNum] = useState(0);

  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <Button num={num} setNum={setNum} />
        <p className="card-text">{num}</p>
      </div>
    </div>
  );
}

export default Card;
