import db from "../config/db.js";

export const getAllPegawai = async () => {
    const [rows] = await db.query(
        "SELECT * FROM tb_asn ORDER BY id LIMIT 411,10"
    );

    return rows;
};