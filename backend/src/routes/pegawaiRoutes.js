import express from "express";
// import { ambilPegawaiByPage, ambilPegawaiByName } from "../controllers/pegawaiController.js";
import { ambilPegawai } from "../controllers/pegawaiController.js";


const router = express.Router();

router.get("/", ambilPegawai);
/*router.post("/", tambahPegawai);
router.put("/:indx", ubahPegawai);
router.delete("/:indx", hapusPegawai);*/

export default router;

/*
readAllPegawai,
readPegawai,
createPegawai,
updatePegawai,
deletePegawai} from "../models/pegawaiModel.js";
*/