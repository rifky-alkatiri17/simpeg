import db from "../config/db.js";

export const getAllPegawai = async () => {
    const [rows] = await db.query(
        "SELECT nama FROM tb_pdi ORDER BY id"
    );

    return rows;
};