import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import pegawai from "../data/pegawai.json";
// import "./css/Pegawai.css";
import Navigasi from "./../components/Pagination";
// import axios from "axios";

import { Stack, Table, Box, Center, Input } from "@chakra-ui/react";

export default function Pegawai() {
    const [pegawai, setPegawai] = useState([]);
    const [jlhPegawai, setJlhPegawai] = useState(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const filteredPegawai = async (val, page) => {
        // console.log(val)
        try {            
            const hasil = await fetch(
                `http://localhost:3000/pegawai?name=${val}&page=${page}`,
            );
            const hasil2 = await hasil.json();
            // console.log( hasil2 );
            const [pegawai, jumlah] = hasil2;
            console.log(pegawai);
            console.log(jumlah[0].total);
            setPegawai(pegawai);
            setJlhPegawai(Number(jumlah[0].total));
        } catch (error) {
            console.log("Terjadi Kesalahan...", error);
        }
    };

    const getData = async (halaman = 1) => {
        const [resPegawai, resJumlahPegawai] = await Promise.all([
            fetch("http://localhost:3000/pegawai?page=" + `${halaman}`),
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
        if (search == "") {
            getData(page);
        } else {
            console.log(search);
            filteredPegawai(search, page);
        }
    }, [page]);

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="pegawai-page" >
            <Input
                type="text"
                p="4"
                placeholder="Cari nama atau NIP..."
                onKeyDown={(e) => {
                    // console.log(e.key)
                    if (e.key === "Enter") {
                        const inputLength = e.target.value.length;
                        if (inputLength > 4) {
                            setPage(1);
                            setSearch(e.target.value);
                            filteredPegawai(e.target.value, page);
                        } else if (inputLength === 0) {
                            setSearch("");
                            setPage(1);
                            getData(page);
                            // alert('Kotak Pencarian Kosong..')
                        } else {
                            alert("Masukkan min 5 karakter...");
                        }
                    }
                }}
            />

            <div className="table-container">
                {/*tabel versi chakra*/}
                <Stack >
                    <Table.Root css={{
                        "& th, & td" : {
                                fontSize: {base:"xs", md:"sm"}
                            }
                        }}>
                        <Table.Header >
                            <Table.Row position="sticky" top="-30px" left="0">
                                <Table.ColumnHeader w="10px">ID</Table.ColumnHeader>
                                <Table.ColumnHeader >NIP</Table.ColumnHeader>
                                <Table.ColumnHeader minW={{base:"200px", md:"300px"}}>Nama</Table.ColumnHeader>
                                <Table.ColumnHeader>Status</Table.ColumnHeader>
                                <Table.ColumnHeader>Gol</Table.ColumnHeader>
                                <Table.ColumnHeader minW={{base:"200px", md:"300px"}}>Jabatan</Table.ColumnHeader>
                                <Table.ColumnHeader minW={{base:"300px", md:"500px"}}>Unor</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {pegawai.map((item) => (
                                <Table.Row
                                    key={item.id}
                                    cursor="pointer"
                                    _hover={{ bg: "gray" }}
                                    onClick={() =>
                                        navigate(`/details?id=${item.id}`)
                                    }
                                >
                                    <Table.Cell w="10px">{item.id}</Table.Cell>
                                    <Table.Cell>{item.nip_baru}</Table.Cell>
                                    <Table.Cell minW={{base:"200px", md:"300px"}}>{item.nama}</Table.Cell>
                                    <Table.Cell>
                                        {item.status_cpns_pns}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.gol_akhir_nama}
                                    </Table.Cell>
                                    <Table.Cell minW={{base:"200px", md:"300px"}}>{item.jabatan_nama}</Table.Cell>
                                    <Table.Cell minW={{base:"300px", md:"500px"}} >{item.unor_nama}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>

                    {pegawai.length >= 1 && (
                        <Navigasi
                            jlhPegawai={jlhPegawai}
                            page={page}
                            onHandleNext={handleNext}
                            onHandlePrev={handlePrev}
                        />
                    )}
                </Stack>

                {pegawai.length === 0 && (
                    <Box className="empty" p="4">
                        <Center>Data pegawai tidak ditemukan.</Center>
                    </Box>
                )}
            </div>
        </div>
    );
}

// export default Pegawai;