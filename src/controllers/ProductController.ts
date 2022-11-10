import { CustomError } from "../types/CustomError";
import { NextFunction, Request, Response } from "express";
import { TimeOfYear } from "models/Product";
import {
  getProducts,
  getProductFilterByTimeOfSale,
  getFilteredProductByPastSale
} from "../services/ProductService";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getProducts();
  return res.send(products);
};

/**
 * 
 * @param req 
 * @param res 
 * @param nxt 
 * @returns discount resposne if query parameters are valid else throw error
 * for example: ?type=time_of_sale&value=june
 */
export const getDiscountPrice = async (
  req: Request,
  res: Response,
  nxt: NextFunction
) => {
  try {
    const type = req.query.type as string;
    const value = req.query.value as string;
    if (type === "time_of_sale" && value) {
      console.log("time of sale");
      const result = await getProductFilterByTimeOfSale(
        req.params.id,
        req.params.customerId,
        value as TimeOfYear
      );
      return res.json(result);
    } else if (type === "past_sale" && value) {
      const pastSaleAsNum = parseInt(value);
      const result = await getFilteredProductByPastSale(
        req.params.id,
        req.params.customerId,
        pastSaleAsNum
      );
      return res.json(result);
    } else {
      throw new CustomError(404, "invalid input");
    }
  } catch (e) {
    return nxt(e);
  }
};
