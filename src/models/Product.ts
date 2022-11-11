import { Customer } from "./Customer";

export interface Product {
  id: string;
  name: string;
  description: string;
  normalPrice: string;
  discountPriceForTimeOfYear: PriceForTimeOfYear;
  discountPriceForPastSale: PriceForPastSale;
  customers: Customer[];
}

export interface DiscountedPriceResponse {
  id: string;
  name: string;
  normalPrice: string;
  discountedPrice?: string;
}

export type TimeOfYear = "mid-summer" | "thanksgiving" | "christmas";

type PriceForTimeOfYear = Record<TimeOfYear, string>;

export type PastSalesAmount =
  | "10000-20000"
  | "20001-30000"
  | "30001-40000"
  | "40001-50000";

type PriceForPastSale = Record<PastSalesAmount, string>;
