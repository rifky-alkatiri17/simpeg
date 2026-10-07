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

const readPegawaiByPage = async (page) => {
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const [rows] = await db.query(
        `SELECT id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama FROM tb_asn ORDER BY id LIMIT ?,?`, [offset, pageSize]);

    return rows;
};


const readPegawaiByName = async (key, page=1) => {
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    /*key berupa nama atau nip*/
    const [rows] = await db.query(
        `SELECT id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama FROM tb_asn WHERE nama LIKE "%${key}%" OR nip_baru LIKE "%${key}%" ORDER BY id LIMIT ?, ?`, [offset, pageSize]);

    const [jumlah] =  await db.query(`SELECT COUNT(*) AS total FROM tb_asn WHERE nama LIKE "%${key}%" OR nip_baru LIKE "%${key}%" ORDER BY id `);    

    return [rows,jumlah];
};

/*const readJlhPegawaiByName = async (key) => {
    const pageSize = 10;
    const offset = 1;

    // key berupa nama atau nip
    //const [rows] = await db.query(
        `SELECT id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama FROM tb_asn WHERE nama LIKE "%${key}%" OR nip_baru LIKE "%${key}%" ORDER BY id `); 
    const [rows] =  await db.query(`SELECT COUNT(*) AS total FROM tb_asn WHERE nama LIKE "%${key}%" OR nip_baru LIKE "%${key}%" ORDER BY id `);  

    return rows;
}*/

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

export { jumlahBarisData, readAllPegawai, readPegawaiByPage, readPegawaiByName, createPegawai, updatePegawai, deletePegawai }

// readJlhPegawaiByName
// id, nip_baru, nama, status_cpns_pns, gol_akhir_nama, jabatan_nama, unor_nama