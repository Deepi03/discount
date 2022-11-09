import { getProductFilterByTimeOfSale } from "../../services/ProductService";

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
  message:
    "If you are our valid customer u get the discount.So please enter ur customer id if there is one"
};

describe("Test productService", () => {
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
