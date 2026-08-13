import db from "../config/db.js";


/*=================
CRUD QUERY SQL
=================*/

const jumlahBarisData = async () => {
    const [rows] = await db.query('SELECT COUNT(*) AS total FROM tb_asn;');
    return rows;
}

const readAllPegawai = async () => {
    const [rows] = await db.query(
        `SELECT id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama FROM tb_asn ORDER BY id`
    );

    return rows;
};

const readPegawaiByPage = async (index) => {
    const [rows] = await db.query(
        `SELECT id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama FROM tb_asn ORDER BY id LIMIT ?,10`, [index] );

    return rows;
};


const readPegawai = async (nama) => {
    const [rows] = await db.query(
        `SELECT id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama FROM tb_asn WHERE nama LIKE "%${nama}%" ORDER BY id`
    );

    return rows;
};

const createPegawai = async () => {
    // const [rows] = await db.query();
    return "createPegawai On Process";
};


const updatePegawai = async (id) => {
    // const [rows] = await db.query();
    return "updatePegawai On Process";
};


const deletePegawai = async (id) => {
    const [rows] = await db.query(
        `DELETE FROM tb_asn WHERE id = ?`, [id]
    );

    return rows;
};

export {jumlahBarisData, readAllPegawai, readPegawaiByPage,readPegawai, createPegawai, updatePegawai, deletePegawai}

// id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama