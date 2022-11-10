import express from "express";
import dotenv from "dotenv";

import productsRoute from "./routes/ProductRoutes";
import { errorHandler } from "../src/errorHandler/Error";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("port", port);
app.use("/products", productsRoute);
app.use(errorHandler);

export { app, port };
