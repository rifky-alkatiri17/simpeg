import { useState, useEffect } from "react";
// import pegawai from "../data/pegawai.json";
// import "./css/Pegawai.css";
import Navigasi from "./Pagination";
import axios from "axios";

import { Heading, Stack, Table } from "@chakra-ui/react";
// import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

function Pegawai() {
    const [pegawai, setPegawai] = useState([]);
    const [jlhPegawai, setJlhPegawai] = useState([]);
    const [page, setPage] = useState(1);
    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(10);

    const filteredPegawai = async (val) => {
        const response = await fetch(
            "http://localhost:3000/pegawai?name=" + `${val}`,
        );
        const pegawai = await response.json();
        // console.log(pegawai);
        setPegawai(pegawai);
    };

    const getData = async (page = 0) => {
        const [resPegawai, resJumlahPegawai] = await Promise.all([
            fetch("http://localhost:3000/pegawai?page=" + `${page}`),
            fetch("http://localhost:3000/pegawai/jumlah"),
        ]);

        const [pegawai, jumlah] = await Promise.all([
            resPegawai.json(),
            resJumlahPegawai.json(),
        ]);

        // const pegawai = await response.json();
        console.log(pegawai);
        setPegawai(pegawai);
        console.log(jumlah[0].total);
        setJlhPegawai(jumlah[0].total);
    };

    useEffect(() => {
        getData(); /*ex: 4111*/
    }, []);
    
    // rumus pagination
    const pageSize = 10;
    const start = (page - 1) * pageSize + 1;
    const end = Math.min(page * pageSize, jlhPegawai);

    const handleNext = () => {
        const nextPage = page + 1;
        const start = (nextPage - 1) * pageSize;
        const end = Math.min(nextPage * pageSize, jlhPegawai);
        // console.log("range:", start, end);
        setStartPage(start);
        setEndPage(end);
    };

    const handlePrev = () => {
        const prevPage = page - 1;
          const start = (prevPage - 1) * pageSize;
          const end = Math.min(prevPage * pageSize, jlhPegawai);
          // console.log("range:", start, end);
          setStartPage(start);
          setEndPage(end);
    };

    return (
        <div className="pegawai-page">
            <div className="">
                <h1>Data Pegawai</h1>
                <p>Daftar pegawai/ASN</p>
            </div>

            <div className="">
                <div className="">
                    <input
                        type="text"
                        placeholder="Cari nama atau NIP..."
                        onKeyDown={(e) => {
                            // console.log(e.key)
                            if (e.key === "Enter") {
                                const inputLength = e.target.value.length;
                                if (inputLength > 4) {
                                    filteredPegawai(e.target.value);
                                } else if (inputLength === 0) {
                                    getData();
                                } else {
                                    alert("Masukkan min 5 karakter...");
                                }
                            }
                        }}
                    />
                </div>

                <div className="table-container">
                    {/*tabel versi chakra*/}
                    <Stack width="full" gap="5">
                        <Heading size="xl">Pegawai</Heading>
                        <Table.Root size="sm">
                            <Table.Header color="red">
                                <Table.Row>
                                    <Table.ColumnHeader>ID</Table.ColumnHeader>
                                    <Table.ColumnHeader>NIP</Table.ColumnHeader>
                                    <Table.ColumnHeader>
                                        Nama
                                    </Table.ColumnHeader>
                                    <Table.ColumnHeader>
                                        Status
                                    </Table.ColumnHeader>
                                    <Table.ColumnHeader>Gol</Table.ColumnHeader>
                                    <Table.ColumnHeader>
                                        Jabatan
                                    </Table.ColumnHeader>
                                    <Table.ColumnHeader>
                                        Unor
                                    </Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {pegawai.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.Cell>{item.id}</Table.Cell>
                                        <Table.Cell>{item.nip_baru}</Table.Cell>
                                        <Table.Cell>{item.nama}</Table.Cell>
                                        <Table.Cell>
                                            {item.status_cpns_pns}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.gol_akhir_nama}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.jabatan_nama}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.unor_nama}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>

                        <Navigasi
                            jlhPegawai={jlhPegawai}
                            start={page}
                            onHandleNext={() => handleNext}
                            onHandlePrev={() => handlePrev}
                        />
                    </Stack>

                    {pegawai.length === 0 && (
                        <div className="empty">
                            Data pegawai tidak ditemukan.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Pegawai;
