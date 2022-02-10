import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      <div className="row">
        {props.item.map((element) => {
          return (
            <div className="col" key={element.id}>
              <Item
                key={element.id}
                id={element.id}
                title={element.title}
                descripcion={element.descripcion}
                price={element.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
