import express from "express";
import { config } from "dotenv";
import morgan from 'morgan'
import appRouter from "./routes/index.js";
config();


const app = express();
// app variale me express function call kiya.
// Middlewares

app.use(express.json());
 // Only used in Development, remove it in Production.

app.use(morgan("dev"));

app.use("/api/v1", appRouter);


export default app;
