import express from "express";
import pegawaiRoutes from "./routes/pegawaiRoutes.js";

const app = express();

app.use(express.json());

app.use("/pegawai", pegawaiRoutes);

export default app;