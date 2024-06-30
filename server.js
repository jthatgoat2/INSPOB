import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";
const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 8080;
console.log(process.env.DB_LOCAL_PASSWORD);
app.use(cors(/*{ origin: process.env.FRONT_END }*/));

app.use("/warehouses", warehouses);
app.use("/inventory", inventory);
app.use("/api", ApiRouter);
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
