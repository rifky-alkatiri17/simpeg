import {
    readAllPegawai,
    readPegawaiByPage,
    readPegawaiByName,
    createPegawai,
    updatePegawai,
    deletePegawai
} from "../models/pegawaiModel.js";

const ambilPegawai = (req, res) => {
    const { name, page } = req.query;
    // console.log(req.query);

    if (name) {
        return ambilPegawaiByName(req,res);
        // console.log('nama...')
    }

    if (page) {
        return ambilPegawaiByPage(req,res);
        // console.log('page...')
    } else {
        res.send(tampilanError)
    }

    // default
};


// const ambilSemuaPegawai = async () => {}

const ambilPegawaiByPage = async (req, res) => {
    // let index = Number(req.params.index);
    let index = Number(req.query.page);
    // console.log(index);

    try {
        const data = await readPegawaiByPage(index);
        res.json(data);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });

    }
};


const ambilPegawaiByName = async (req, res) => {
    //Support Name or NIP
    // const nama = req.params.nama;
    let name = req.query.name;
    // console.log(name);

    try {
        const data = await readPegawaiByName(name);
        res.json(data);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });

    }   
};

// export { ambilPegawaiByPage, ambilPegawaiByName }
export { ambilPegawai };

/*===================================
TAMBAHAN SAJA
=====================================*/

const tampilanError = `
<h1 style= "color: red;
            font-weight: bold;
            text-align: center;
            font-family: arial;
            height: 100vh;"
 >Routes/Params/Query Error...</h1>`