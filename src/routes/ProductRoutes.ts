import { Router } from "express";

import {
  getAllProducts,
  getDiscountPrice
} from "../controllers/ProductController";

const productsRoute = Router();

productsRoute.get("/", getAllProducts);
productsRoute.get("/:id/customers/:customerId", getDiscountPrice);

export default productsRoute;
