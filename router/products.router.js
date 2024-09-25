import express from "express";
import { getProducts } from "../controller/products";

export const productsRouter = express.Router();

productsRouter.get("/", getProducts);
