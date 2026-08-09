import { useState } from "react";
import pegawai from "../data/pegawai.json";
import "./css/Pegawai.css";

function Pegawai() {
    const [search, setSearch] = useState("");

    const filteredPegawai = pegawai.filter((item) =>
        item. Nama.toLowerCase().includes(search.toLowerCase()) ||
        item.NIP.includes(search)
    );

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
                            <th>No</th>
                            <th>NIP</th>
                            <th>Nama</th>
                            <th>Pangkat/Golongan</th>
                            <th>Jabatan</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredPegawai.map((item, index) => (
                            <tr key={item.No}>
                                <td>{index + 1}</td>
                                <td>{item.NIP}</td>
                                <td>{item.Nama}</td>
                                <td>{item.Pangkat_Gol}</td>
                                <td>{item.Jabatan}</td>
                            </tr>
                        ))}
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