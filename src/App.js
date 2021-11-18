import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increment,
//   decrement,
//   loggedIn,
//   loggedOut,
// } from "./store/actions/action";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Products from "./page/Products";
import Cart from "./page/Cart";
import MyProduct from "./page/MyProduct";
import CartIcon from "./component/CartIcon";

function App() {
  // const count = useSelector((state) => state.counter.count);
  // const show = useSelector((state) => state.hasLogged.login);
  // const dispatch = useDispatch();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            CatsStore
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  carts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <CartIcon />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<MyProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h1>Sorry, Your Page Not Found</h1>
    </div>
  );
}
export default App;
