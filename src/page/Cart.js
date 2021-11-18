import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  function deleteItem(id) {
    console.log(id)
    dispatch({ type: "DEL", payload: id });
  }
  const [count, setCount] = useState(0);
  const cart = useSelector((state) => state.counter.cart);
  const Shap = cart.map((e) => {
    return (
      <div className="col-4" key={e.product.id}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={e.product.source} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{e.product.title}</h5>
            <p className="card-text">Price: {e.product.price}$</p>
            <p className="card-text">Quantity: {e.quantity}</p>
            <p className="card-text">Total: {e.product.price * e.quantity}$</p>
            <button
              className="btn bg-danger"
              style={{ color: "#fff" }}
              onClick={() => deleteItem(e.product.id)}
            >
              <i className="fa fa-shopping-cart"></i>
              delete
            </button>
          </div>
        </div>
      </div>
    );
  });
  useEffect(() => {
    setCount(cart.reduce((a, cur) => a + cur.product.price * cur.quantity, 0));
  }, [Shap]);

  return (
    <div className="my-3">
      <h2>Cart</h2>
      <div className="row">{Shap}</div>
      <h2 className="mt-2">
        Total:
        {count}$
      </h2>
      <div className="d-grid gap-2">
        <button className="btn bg-primary my-2" style={{ color: "#fff" }}>
          Pay
        </button>
      </div>
    </div>
  );
}
