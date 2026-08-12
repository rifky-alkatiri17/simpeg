import { getAllPegawai } from "../models/pegawaiModel.js";

export const index = async (req, res) => {
    const indx = req.params.indx;
    console.log(indx);

    try {
        const data = await getAllPegawai(indx);
        res.json(data);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });

    }
};