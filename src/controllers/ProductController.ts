import { CustomError } from "../types/CustomError";
import { Request, Response, Router } from "express";
import { TimeOfYear } from "models/Product";
import { product, productFilterByTimeOfSale } from "../services/ProductService";

export const productId = async (req: Request, res: Response) => {
  const products = await product();
  console.log("controller ", products);
  return res.send(products);
};

export const productsByTimeOfYear = async (req: Request, res: Response) => {
  var timeSale = req.query.timeOfSale as TimeOfYear;
  if (typeof timeSale != undefined) {
    const products = await productFilterByTimeOfSale(req.params.id, timeSale);
    console.log("controller ", products);
    return res.json(products);
  } else {
    throw new CustomError(400, "Invalid input");
  }
};
