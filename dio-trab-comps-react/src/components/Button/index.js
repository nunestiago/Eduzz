import React from "react";

function Button({ setNum, num }) {
  return (
    <div>
      {" "}
      <button
        type="button"
        class="btn btn-success"
        onClick={() => setNum(num + 1)}
      >
        Adicionar
      </button>
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => setNum(num - 1)}
      >
        Remover
      </button>
    </div>
  );
}

export default Button;
