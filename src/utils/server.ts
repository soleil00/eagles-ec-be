import express from "express";
import cors from "cors";
import appROutes from "../routes";
import homeRoute from "../routes/homeRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", homeRoute);
app.use("/api/v1", appROutes);

export default app;
