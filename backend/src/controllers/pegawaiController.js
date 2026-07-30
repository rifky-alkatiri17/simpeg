import { getAllPegawai } from "../models/pegawaiModel.js";

export const index = async (req, res) => {
    try {

        const data = await getAllPegawai();

        res.json(data);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};