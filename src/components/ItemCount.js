import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  let [num, setIncrementNum] = useState(initial);

  let Increment = () => {
    if (num <= stock) {
      setIncrementNum(num++);
    } else if (num){
      alert("No hay en Stock");
    }
  };

  let Reduce = () => {
    if (num >= initial) {
      setIncrementNum(num--);
    } else {
      alert("No hay en Stock");
    }
  };

  let OnAdd = () => {
    if (num == 6) {
      num = num - 1;
      return alert(" Pediste " + num + " Productos");
    } else if (num == 0) {
      num = num + 1;
      return alert(" Pediste " + num + " Productos");
    } else {
      return alert(" Pediste " + num + " Productos");
    }
  };

  return (
    <div className="Valoraciones">
      <div className="info">
        <p className="text_align">{num}</p>
        
        <button
          onClick={Increment}
          class=" d-inline btn btn-primary btn-sm"
        >
          Aumentar
        </button>
        <button
          onClick={Reduce}
          class=" d-inline btn btn-primary btn-sm"
        >
          Reducir
        </button>

        <br />
        <br />

        <button
          onClick={OnAdd}
          class=" d-inline btn btn-primary btn-sm"
        >
          Agregar Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
