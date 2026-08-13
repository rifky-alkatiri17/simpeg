import express from "express";
import {ambilPegawaiByPage, ambilPegawai} from "../controllers/pegawaiController.js";

const router = express.Router();

router.get("/:index", ambilPegawaiByPage);
router.get("/:nama", ambilPegawai);
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