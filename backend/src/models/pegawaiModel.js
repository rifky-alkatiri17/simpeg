import db from "../config/db.js";

export const getAllPegawai = async (index) => {
    const [rows] = await db.query(
        `SELECT id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama FROM tb_asn ORDER BY id LIMIT ${index},10`
    );

    return rows;
};
