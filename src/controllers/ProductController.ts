import { Request, Response, Router } from "express";
import { TimeOfYear } from "models/Product";
import {
  getProducts,
  getProductFilterByTimeOfSale
} from "../services/ProductService";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getProducts();
  return res.send(products);
};

export const getProductsByTimeOfYear = async (req: Request, res: Response) => {
  const timeSale = req.query.timeOfSale;
  const products = await getProductFilterByTimeOfSale(
    req.params.id,
    req.params.customerId,
    timeSale as TimeOfYear
  );
  return res.json(products);
};
