import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import productsRoute from "./routes/ProductRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

app.get("", (req, res) => {
  res.send("Express + TypeScript Server");
});
app.use("/id", productsRoute);
