import { useState, useEffect } from "react";
// import pegawai from "../data/pegawai.json";
// import "./css/Pegawai.css";
import Navigasi from "./Pagination";
import axios from "axios";

import { Stack, Table, Box, Center, Input } from "@chakra-ui/react";
// import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

function Pegawai() {
    const [pegawai, setPegawai] = useState([]);
    const [jlhPegawai, setJlhPegawai] = useState(0);
    const [page, setPage] = useState(1);
    
    const filteredPegawai = async (val) => {
        // console.log(val)
        try{            
            /*const response = await fetch(
                `http://localhost:3000/pegawai?name=${val}`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }*/

            const [resPegawai, resJumlah] = await Promise.all([
                fetch(`http://localhost:3000/pegawai?name=${val}`),
                fetch(`http://localhost:3000/pegawai`)
            ]);

            const pegawai = await response.json();
            // console.log(pegawai);
            setPegawai(pegawai);
        }catch(error){
            console.log('Terjadi Kesalahan...',error);            
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
        getData(page); /*ex: 4111*/        
    }, [page]);


    const handleNext = () => {
        setPage(page + 1);        
    };

    const handlePrev = () => {
        if(page>1){
            setPage(page - 1);
        }
    };

    return (
        <div className="pegawai-page">
            <Input
                type="text"
                p="4"
                placeholder="Cari nama atau NIP..."
                onKeyDown={(e) => {
                    // console.log(e.key)
                    if (e.key === "Enter") {
                        const inputLength = e.target.value.length;
                        if (inputLength > 4) {
                            filteredPegawai(e.target.value);
                        } else if (inputLength === 0) {
                            getData();
                            // alert('Kotak Pencarian Kosong..')
                        } else {
                            alert("Masukkan min 5 karakter...");
                        }
                    }
                }}
            />

            <div className="table-container">
                {/*tabel versi chakra*/}
                <Stack width="full" gap="5">
                    <Table.Root
                        size="sm"
                        css={{ 
                            "& th, & td": { 
                                padding: "12px 16px" 
                            } 
                        }}
                    >
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
                        <Center>
                            Data pegawai tidak ditemukan.
                        </Center>
                    </Box>
                )}
            </div>
        </div>
    );
}

export default Pegawai;