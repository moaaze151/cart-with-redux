import { Link } from "react-router-dom";

function ProductItem({ products }) {
  return (
    <div className="row">
      {products.map((e) => {
        return (
          <div className="col-4" key={e.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={e.source} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">Price: {e.price}$</p>
                <Link to={`/products/${e.id}`} className="btn btn-primary">
                  {e.details}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ProductItem;
