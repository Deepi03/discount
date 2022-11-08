import request from "supertest";
import { app } from "../../app";

describe("Test product path with given id and time of sale", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/products/1?timeOfSale=june");
    expect(response.statusCode).toBe(200);
  });
});
