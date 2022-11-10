import {
  getAllProducts,
  getDiscountPrice
} from "../controllers/ProductController";
import { Router } from "express";

const productsRoute = Router();

productsRoute.get("/", getAllProducts);
productsRoute.get("/:id/customers/:customerId", getDiscountPrice);

export default productsRoute;
