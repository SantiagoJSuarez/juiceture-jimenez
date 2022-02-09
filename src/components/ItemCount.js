import { useState } from "react";

const ItemCount = () => {
  // const num = 0;
  let [num, setIncrementNum] = useState(1);
  

  let Increment = () => {
    if (num  <= 5) {
      setIncrementNum(num++);
    } 
    else 
    {
      alert("No hay en Stock");
    }
  };

  let Reduce = () => {
    if (num >= 1) {
      setIncrementNum(num--);
    } else {
      alert("No hay en Stock");
    }
  };

  return (
    <div className="Valoraciones">
      <div className="info">
        <p className="text_align">{num}</p>
        <button
          onClick={Increment}
          type="button"
          id="btnSubmit"
          class=" d-inline btn btn-primary btn-sm"
        >
          Aumentar
        </button>
        <button
          onClick={Reduce}
          type="button"
          id="btnSubmit"
          class=" d-inline btn btn-primary btn-sm"
        >
          Reducir
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
