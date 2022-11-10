import { CustomError } from "../types/CustomError";

import { DiscountedPriceResponse, PastSalesAmount, TimeOfYear } from "../models/Product";
import productsJson from "./../../products.json";

/**
 * 
 * @returns all the products
 */
export const getProducts = async () => {
  const product = productsJson.map(d => d);
  return product;
};


/**
 * 
 * @param productId 
 * @param customerId 
 * @param timeofSale 
 * @returns product with discounted price if valid product id,customer id and time of Sale given and throws error if product id is not valid and for invalid customer id and time of sale returns product with normal price 
 */
export const getProductFilterByTimeOfSale = async (
  productId: string,
  customerId: string,
  timeofSale: TimeOfYear
): Promise<DiscountedPriceResponse | CustomError> => {
  const product = productsJson.find(p => 
    p.id === productId
  ); 
  var specialTimeOfYear:string[]= ["june","november","december"];
  if (!product) {
    return new CustomError(404, "Product id is not found");
  }  

  if(!specialTimeOfYear.includes(timeofSale)) {
    return {
      id: product.id,
      name: product.name,
      normalPrice: product.normalPrice,
      message:`Discount available only on ${Object.keys(product.discountPriceForTimeOfYear)}`
    };
  }
  const isGivenCustomerMapToProduct = product.customers?.find(c => c.id === customerId);
  // if product doesnt match with customer, return only normalPrice
  if (product && !isGivenCustomerMapToProduct) {
    return {
      id: product.id,
      name: product.name,
      normalPrice: product.normalPrice,
      message:"Enter valid customer id to get discount"
    };
  }
  return {
    id: product.id,
    name: product.name,
    normalPrice: product.normalPrice,
    discountedPrice: product.discountPriceForTimeOfYear[timeofSale]
  };
};

/**
 * 
 * @param productId 
 * @param customerId 
 * @param pastSale 
 * @returns product with discounted price if valid product id,customer id and past sale given and throws error if product id is not valid and for invalid customer id and past sale returns product with normal price
 */
 export const getFilteredProductByPastSale = async(productId: string,
  customerId: string,
  pastSale: number) : Promise<DiscountedPriceResponse | CustomError> => {
  const product = productsJson.find(p => 
    p.id === productId
  );  
  if (product) { 
    const isGivenCustomerMapToProduct =product.customers?.find(c => c.id === customerId);
    if (!isGivenCustomerMapToProduct) {
      return {
        id: product.id,
        name: product.name,
        normalPrice: product.normalPrice,
        message:"Enter valid customer id to get discount"
      };
    }  
    
    for(const [slab,price] of Object.entries(product.discountPriceForPastSale)) {
      const slabvalue = slab as PastSalesAmount;
      const startSale = parseInt(slab.split("-")[0]);
      const endSale = parseInt(slab.split("-")[1]);
        if(pastSale >= startSale && pastSale <= endSale) {
          return {
            id:product.id,
            name:product.name,
            normalPrice:product.normalPrice,
            discountedPrice:product.discountPriceForPastSale[slabvalue]
          }
      }
    }
  } 
  return new CustomError(404, "Product id is not found");
} 


