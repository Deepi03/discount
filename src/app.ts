import express from "express";

import dotenv from "dotenv";
import productsRoute from "./routes/ProductRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("port", port);
app.use("/products", productsRoute);

export { app, port };
