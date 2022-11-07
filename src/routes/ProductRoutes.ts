import { productId } from "../controllers/ProductController";
import { Router } from "express";

const productsRoute = Router();
productsRoute.get("/", productId);

export default productsRoute;
