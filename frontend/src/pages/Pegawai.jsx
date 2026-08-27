import { useState, useEffect } from "react";
// import pegawai from "../data/pegawai.json";
import "./css/Pegawai.css";
// import Pagination from "./Pagination"
import axios from "axios";

import {
  ButtonGroup,
  Heading,
  IconButton,
  Pagination,
  Stack,
  Table,
} from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"



function Pegawai() {
    const [pegawai, setPegawai] = useState([]);

    const filteredPegawai = async (val) => {
        const response = await fetch("http://localhost:3000/pegawai?name=" + `${val}`);
        const pegawai = await response.json();
        // console.log(pegawai);
        setPegawai(pegawai)
    }

    const getData = async (page = 0) => {
        const response = await fetch(
            "http://localhost:3000/pegawai?page=" + `${page}`
        );

        const pegawai = await response.json();
        console.log(pegawai);

        setPegawai(pegawai);

    };

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

        getData(); /*ex: 4111*/

    }, []);

    return (
        <div className="pegawai-page" >

            <div className="page-header" style={{color: "purple", fontWeight: "bold"}}>
                <h1>Data Pegawai</h1>
                <p>Daftar pegawai/ASN</p>
            </div>

            <div className="table-container" style={{color: "purple", fontWeight: "bold"}}>

                <div className="table-header">

                    <input
                        type="text"
                        placeholder="Cari nama atau NIP..."                         
                        onKeyDown={(e) => {
                            // console.log(e.key)
                            if(e.key === "Enter"){
                                const inputLength = e.target.value.length;
                                if(inputLength > 4){;
                                    filteredPegawai(e.target.value)
                                }
                                else if(inputLength === 0){
                                    getData()
                                }else{
                                    alert('Masukkan min 5 karakter...')
                                }
                            }                            
                        }}
                    />

                </div>

                {/*<table>
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
                        {pegawai.map((item, index) =>{
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
                </table>*/}

                {/*tabel versi chakra*/}
                <Stack width="full" gap="5">
                  <Heading size="xl">Pegawai</Heading>
                  <Table.Root size="sm" variant="outline" striped>
                    <Table.Header>
                      <Table.Row >
                        <Table.ColumnHeader color="blue.500">ID</Table.ColumnHeader>
                        <Table.ColumnHeader color="blue.500">NIP</Table.ColumnHeader>
                        <Table.ColumnHeader color="blue.500">Nama</Table.ColumnHeader>
                        <Table.ColumnHeader color="blue.500">Status</Table.ColumnHeader>
                        <Table.ColumnHeader color="blue.500">Gol</Table.ColumnHeader>
                        <Table.ColumnHeader color="blue.500">Jabatan</Table.ColumnHeader>
                        <Table.ColumnHeader color="blue.500">Unor</Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {pegawai.map((item) => (
                        <Table.Row key={item.id}>
                          <Table.Cell>{item.id}</Table.Cell>
                          <Table.Cell>{item.nip_baru}</Table.Cell>
                          <Table.Cell>{item.nama}</Table.Cell>
                          <Table.Cell>{item.status_cpns_pns}</Table.Cell>
                          <Table.Cell>{item.gol_akhir_nama}</Table.Cell>
                          <Table.Cell>{item.jabatan_nama}</Table.Cell>
                          <Table.Cell>{item.unor_nama}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>

                  <Pagination.Root count={pegawai.length * 5} pageSize={5} page={1} style={{color: "purple", fontWeight: "bold"}}>
                    <ButtonGroup variant="ghost" size="sm" wrap="wrap">
                      <Pagination.PrevTrigger asChild style={{color: "purple", fontWeight: "bold"}}>
                        <IconButton>
                          <LuChevronLeft />
                        </IconButton>
                      </Pagination.PrevTrigger>

                      <Pagination.Items
                        render={(page) => (
                          <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                            {page.value}
                          </IconButton>
                        )}
                      style={{color: "purple", fontWeight: "bold"}} />

                      <Pagination.NextTrigger asChild style={{color: "purple", fontWeight: "bold"}}>
                        <IconButton>
                          <LuChevronRight />
                        </IconButton>
                      </Pagination.NextTrigger>
                    </ButtonGroup>
                  </Pagination.Root>
                </Stack>

                {pegawai.length === 0 && (
                    <div className="empty">
                        Data pegawai tidak ditemukan.
                    </div>
                )}

                {/*<Pagination />*/}

            </div>

        </div>
    );
}

export default Pegawai;