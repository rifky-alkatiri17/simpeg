import express from "express";
import cors from "cors";
import pegawaiPgRoutes from "./routes/pegawaiRoutes.js";
// import { ambilPegawaiByPage, ambilPegawaiByName } from "./controllers/pegawaiController.js";
import beranda from "./pages/home.js";

/*===========
instansiasi
============*/
const app = express();

/*=====
config
======*/
app.use(express.json());
app.use(cors());

/*=======
routes
========*/
app.use("/pegawai", pegawaiPgRoutes);
/*app.get("/pegawai", (req, res) =>{
    const {name, index} = req.query;
    // console.log(req.query);
    if (name) {
        return ambilPegawaiByName;
        // console.log("By Name");
    }

    if (index) {
        return ambilPegawaiByPage;
        // console.log("By Page");
    }
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