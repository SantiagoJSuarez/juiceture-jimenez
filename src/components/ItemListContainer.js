import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const ItemListContainer = (props) => {
  return (
    <>
      <div className="container-fluid">
        <h1> Welcome to :  {props.name} !!!! </h1>
        
      </div>
    </>
  );
};

export default ItemListContainer;
