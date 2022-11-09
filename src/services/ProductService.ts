import { CustomError } from "../types/CustomError";
import { DiscountedPriceResponse, TimeOfYear } from "../models/Product";
import productsJson from "./../../products.json";

export const getProducts = async () => {
  const product = productsJson.map(d => d);
  return product;
};

export const getProductFilterByTimeOfSale = async (
  productId: string,
  customerId: string,
  timeofSale: TimeOfYear
): Promise<DiscountedPriceResponse | CustomError> => {
  const product = productsJson.find(p => 
    p.id === productId
  );  
  if (!product) {
    return new CustomError(404, "Product id is not found");
  }
  if(!timeofSale ){
    return new CustomError(404, "Time of sale should be given");
  } 
  if(timeofSale != "june" && timeofSale != "november" && timeofSale != "december"){
   return {
    id: product.id,
    name: product.name,
    normalPrice: product.normalPrice,
    message:"no discount at the moment"
  };
  }
  const isGivenCustomerMapToProduct =product.customers?.find(c => c.id === customerId);
  // if product doesnt match with customer, return only normalPrice
  if (product && !isGivenCustomerMapToProduct) {
    return {
    id: product.id,
    name: product.name,
    normalPrice: product.normalPrice,
    message:"If you are our valid customer u get the discount.So please enter ur customer id if there is one"
  };
  }
  return {
    id: product.id,
    name: product.name,
    normalPrice: product.normalPrice,
    discountedPrice: product.discountPriceForTimeOfYear[timeofSale]
  };
};
