import express from "express";
import cors from "cors";
import pegawaiRoutes from "./routes/pegawaiRoutes.js";
import beranda from "./pages/home.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/pegawai", pegawaiRoutes);
// app.use("/other", otherRoutes);
/*app.use("/", (req, res)=>{
	res.send("<h1>Hello World</h1>")
});*/
app.use("/", beranda);

export default app;


/*===================
CATATAN
=====================*/

/*app adalah aplikasi Express utama.

Biasanya digunakan untuk:

middleware global
konfigurasi CORS: Cross Origin Request (Request Lintas server/port)
express.json(): mengenali header json
memasang router
menentukan port
menjalankan server*/