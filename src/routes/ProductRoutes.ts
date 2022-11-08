import { productsByTimeOfYear } from "../controllers/ProductController";
import { Router } from "express";

const productsRoute = Router();

productsRoute.get("/:id", productsByTimeOfYear);

export default productsRoute;
