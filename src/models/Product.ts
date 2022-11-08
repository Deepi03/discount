export interface Product {
  id: string;
  name: string;
  description: string;
  normalPrice: string;
  discountPriceForTimeOfYear: PriceForTimeOfYear;
  discountPriceForPastSale: PriceForPastSale;
  discountPriceForCustomer: PriceForCustomer;
}

export interface DiscountedPriceResponse {
  id: string;
  name: string;
  normalPrice: string;
  discountedPrice: string;
}

export type TimeOfYear = "june" | "november" | "december";

type PriceForTimeOfYear = Record<TimeOfYear, string>;

type PastSalesAmount =
  | "10000-20000"
  | "20001-30000"
  | "30001-40000"
  | "40001-50000";

type PriceForPastSale = Record<PastSalesAmount, string>;

type Customer = "gigantti" | "verkokauppa" | "prisma";
type PriceForCustomer = Record<Customer, string>;
