import { readAllPegawai, readPegawaiByPage,
        readPegawai,
        createPegawai,
        updatePegawai,
        deletePegawai} from "../models/pegawaiModel.js";


// const ambilSemuaPegawai = async () => {}

const ambilPegawaiByPage = async (req, res) => {
    let index = Number(req.params.index);
    // index = index === Nan ? 0 : index;
    console.log(index);

    try {
        const data = await readPegawaiByPage(index);
        res.json(data);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });

    }
};


const ambilPegawai = async (req, res) => {
    const nama = req.params.nama;
    console.log(nama);

    try {
        const data = await readPegawai(nama);
        res.json(data);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });

    }
};

export {ambilPegawaiByPage, ambilPegawai}