import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success  text-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          JUICETURE
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse d-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contactos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
               Bebidas
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <CartWidget/>
              </a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
