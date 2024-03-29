import request from "supertest";
import { app } from "../../app";

describe("Test product path with given id and time of sale", () => {
  test("It should response the getDiscountPrice method", async () => {
    const response = await request(app).get(
      "/products/2/customers/2?type=time_of_sale&value=christmas"
    );
    expect(response.statusCode).toBe(200);
  });
  test("It should response the getDiscountPrice method", async () => {
    const response = await request(app).get("/products/2/customers/2");
    expect(response.statusCode).toBe(404);
  });
});
