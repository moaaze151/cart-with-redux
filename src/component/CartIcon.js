import "./CartIcon.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartIcon() {
  const cart = useSelector((state) => state.counter.cart);
  const len = cart.reduce((ac,cur) => ac + cur.quantity,0)
  return (
    <div className="content">
      <Link to="/cart">
        <i className="fa fa-shopping-cart fa-2x"></i>
        <span className="badge bg-danger rounded-circle position-absolute top-0 start-50">
         {len}
        </span>
      </Link>
    </div>
  );
}
export default CartIcon;
