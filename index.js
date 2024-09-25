import express from "express";
import { customersRouter } from "./router/customer.router";
import { productsRouter } from "./router/products.router";

const app = express();

app.use(express.json());

const port = 8080;

app.use("/customers", customersRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
