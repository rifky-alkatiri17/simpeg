import express from "express";
import { index } from "../controllers/pegawaiController.js";

const router = express.Router();
router.get("/:indx", index);

export default router;