import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Item = ({ id, title, descripcion, price }) => {
  return (
    <div className="card" key={id} >
      <div className="card-body">
        <h5 className="card-title" > {title} </h5>
        <p className="card-text">
          {descripcion}
        </p>
          <strong>
              $ {price}
          </strong>
      </div>
    </div>
  );
};

export default Item;
