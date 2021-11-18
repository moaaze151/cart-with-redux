import products from "./product.json";
export function getAll() {
  return Promise.resolve(products);
}
export default { getAll };
