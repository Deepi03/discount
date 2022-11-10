import {
  getFilteredProductByPastSale,
  getProductFilterByTimeOfSale
} from "../../services/ProductService";

const expectedResponse = {
  id: "1",
  name: "iphone14",
  normalPrice: "1200",
  discountedPrice: "1000"
};
const expectedResponseWithUndefinedCustomer = {
  id: "1",
  name: "iphone14",
  normalPrice: "1200",
  message: "Enter valid customer id to get discount"
};

describe("Test productService time of sale", () => {
  test("Test productFilterByTimeOfSale", async () => {
    const response = await getProductFilterByTimeOfSale("1", "1", "june");
    expect(response).toStrictEqual(expectedResponse);
  });
  test("Test productFilterByTimeOfSaleWithUndefinedCustomer", async () => {
    const response = await getProductFilterByTimeOfSale("1", "", "june");
    expect(response).toStrictEqual(expectedResponseWithUndefinedCustomer);
  });
  test("Test productFilterByTimeOfSaleWithUndefinedProduct", async () => {
    const response = await getProductFilterByTimeOfSale("", "2", "june");
    expect(response).toBeUndefined;
  });
});

describe("Test product service past sale", () => {
  test("Test productFilterByPastSales", async () => {
    const response = await getFilteredProductByPastSale("1", "2", 10000);
    expect(response).toStrictEqual({
      id: "1",
      name: "iphone14",
      normalPrice: "1200",
      discountedPrice: "1200"
    });
  });
});
