import { Request, Response, Router } from "express";
import { product } from "../services/ProductService";

export const productId = async (req: Request, res: Response) => {
  const products = await product();
  console.log("controller ", products);
  return res.send(products);
};
