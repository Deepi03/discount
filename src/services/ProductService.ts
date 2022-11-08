import { CustomError } from "../types/CustomError";
import {
  DiscountedPriceResponse,
  Product,
  TimeOfYear
} from "../models/Product";
import productsJson from "./../../products.json";

export const product = async () => {
  const product = productsJson.map(d => d);
  return product;
};

export const productFilterByTimeOfSale = async (
  id: string,
  timeofSale: TimeOfYear
): Promise<DiscountedPriceResponse> => {
  const product = productsJson.filter(p => p.id);
  return {
    id: product[0].id,
    name: product[0].name,
    normalPrice: product[0].normalPrice,
    discountedPrice: product[0].discountPriceForTimeOfYear[timeofSale]
  };
};
