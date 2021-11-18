import { useEffect, useState } from "react";
import ProductApi from "../api/products";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function MyProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [val, setVal] = useState(0);
  const [total, setTotal] = useState(0);
  const { id } = useParams();

  useEffect(function () {
    ProductApi.getAll().then((data) => {
      const newData = data.filter((e) => `${e.id}` === id);
      setProduct([...newData]);
    });
  }, []);

  const Quant = (quant) => {
    if (quant <= 0) {
      setVal(0);
      setTotal(0);
    } else {
      setVal(quant);
      setTotal(quant * product[0].price);
    }
  };

  const goToPay = (m) => {
    if (val <= 0) {
      return;
    }
    const obj = { product: m, quantity: val };
    dispatch({ type: "ADD", payload: obj })
  };

  return (
    <div className="mt-3">
      {product.length ? (
        <div className="row">
          <div className="col-6">
            <img
              src={`../${product[0].source}`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-6">
            <h2 className="mb-4">{product[0].title}</h2>
            <h5 className="">Price: {product[0].price}$</h5>
            <p style={{ lineHeight: "1.7", fontSize: "1.2rem" }}>
              {product[0].desc}
            </p>
            <p>Total Price: {total}</p>
            <input
              type="number"
              onChange={(e) => Quant(parseInt(e.target.value))}
              value={val}
            />
            <button
              className="btn btn-primary d-block mt-3"
              onClick={() => goToPay(...product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading.......</p>
      )}
    </div>
  );
}
export default MyProduct;
