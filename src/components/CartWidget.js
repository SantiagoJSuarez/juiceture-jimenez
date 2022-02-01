import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const CartWidget = () => {
  return (
    <>
      <button type="button" className="btn btn-success position-relative">
        <em className="bi bi-cart-fill"></em>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          10+
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </>
  );
};

export default CartWidget;
