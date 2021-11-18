import { useEffect, useState } from "react";
import ProductItem from "../component/ProductItem";
import ProductApi from "../api/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductApi.getAll().then((data) => {
      setProducts([...data]);
    });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {products.length === 0 && <p>Loading...</p>}
      <ProductItem products={products} />
    </div>
  );
}
