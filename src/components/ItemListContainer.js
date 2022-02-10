import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Item from "./Item";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import ItemProducts from "./ItemProducts";

const ItemListContainer = (props) => {
  let [items, setItems] = useState([]);

  useEffect(() => { // Esta obteniendo la respuesa del procesarDatos
    procesarDatos(1000, ItemProducts)
      .then((result) => setItems(result))
      .catch((error) => console.log(error));
  }, [items]);

  const procesoDatos = true;

  const procesarDatos = async (Timer, items) => { //Esta emulando una respuesta
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (procesoDatos) {
          const itemsProcesados = items.filter((item) => item.id > 0);
          resolve(itemsProcesados);
        } else {
          reject("Error");
        }
      }, Timer);
    });
  };



  return (
    <>
      <div className="container-fluid">
        <h1> Welcome to : {props.name} !!!! </h1>
        <ItemList item={items}/>
       
      </div>
    </>
  );
};

export default ItemListContainer;
