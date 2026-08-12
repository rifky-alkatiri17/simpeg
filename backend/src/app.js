import express from "express";
import cors from "cors";
import pegawaiRoutes from "./routes/pegawaiRoutes.js";
import beranda from "./pages/home.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/pegawai", pegawaiRoutes)
app.use("/", (req, res)=>{
	res.send("<h1>Hello World</h1>")
});

export default app;