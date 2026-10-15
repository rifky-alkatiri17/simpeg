import express from "express";
import { ambilPegawai, totalPegawai } from "../controllers/pegawaiController.js";


const router = express.Router();

router.get("/", ambilPegawai);
router.get("/:params", totalPegawai);
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