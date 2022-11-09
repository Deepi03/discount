import {
  getAllProducts,
  getProductsByTimeOfYear
} from "../controllers/ProductController";
import { Router } from "express";

const productsRoute = Router();

productsRoute.get("/", getAllProducts);
productsRoute.get("/:id", getProductsByTimeOfYear);
productsRoute.get("/:id/customers/:customerId", getProductsByTimeOfYear);

export default productsRoute;
