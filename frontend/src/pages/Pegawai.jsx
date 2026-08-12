import { useState, useEffect } from "react";
// import pegawai from "../data/pegawai.json";
import "./css/Pegawai.css";

import axios from "axios";



function Pegawai() {
    const [search, setSearch] = useState("");
    const [pegawai, setPegawai] = useState([]);

    const filteredPegawai = pegawai.filter((item) =>
        item.nama.toLowerCase().includes(search.toLowerCase()) ||
        item.nip_baru.includes(search)
    );

    useEffect(() => {
        /*const getData = async () =>{
            axios.get("http://localhost:3000/pegawai")
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
            });
        }*/

        const getData = async () => {
            const response = await fetch(
                "http://localhost:3000/pegawai"
            );
             
            const pegawai = await response.json();
            console.log(pegawai);

            setPegawai(pegawai)

        };

        getData();

    }, []);

    return (
        <div className="pegawai-page">

            <div className="page-header">
                <h1>Data Pegawai</h1>
                <p>Daftar pegawai/ASN</p>
            </div>

            <div className="table-container">

                <div className="table-header">

                    <input
                        type="text"
                        placeholder="Cari nama atau NIP..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>NIP</th>
                            <th>Nama</th>                            
                            <th>Status ASN</th>
                            <th>Pangkat/Golongan</th>
                            <th>Jabatan</th>
                            <th>Unit Kerja</th>
                        </tr>
                    </thead>

                    <tbody>                        
                        {filteredPegawai.map((item, index) =>{
                            return(
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.nip_baru}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.status_cpns_pns === "P" || item.status_cpns_pns === "C"? "PNS" : "PPPK" }</td>
                                    <td>{item.gol_akhir_nama}</td>
                                    <td>{item.jabatan_nama}</td>
                                    <td>{item.unor_nama}</td>
                                </tr>
                            )
                        })}                        
                    </tbody>
                </table>

                {filteredPegawai.length === 0 && (
                    <div className="empty">
                        Data pegawai tidak ditemukan.
                    </div>
                )}

            </div>

        </div>
    );
}

export default Pegawai;