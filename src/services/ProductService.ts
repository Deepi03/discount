import productsJson from "./../../products.json";

export const product = async () => {
  const product = productsJson.map(d => d);
  return product;
};
