import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";



// Kelompok field yang akan ditampilkan
const kelompokData = [
  {
    judul: "Identitas Pegawai",
    fields: [
      ["id", "ID"],
      ["pns_id", "PNS ID"],
      ["nip_baru", "NIP Baru"],
      ["nip_lama", "NIP Lama"],
      ["nama", "Nama"],
      ["gelar_depan", "Gelar Depan"],
      ["gelar_belakang", "Gelar Belakang"],
      ["tempat_lahir_id", "Tempat Lahir ID"],
      ["tempat_lahir_nama", "Tempat Lahir"],
      ["tanggal_lahir", "Tanggal Lahir"],
      ["jenis_kelamin", "Jenis Kelamin"],
      ["agama_id", "Agama ID"],
      ["agama_nama", "Agama"],
      ["jenis_kawin_id", "Jenis Kawin ID"],
      ["jenis_kawin_nama", "Jenis Kawin"],
      ["nik", "NIK"],
    ],
  },
  {
    judul: "Kontak dan Data Pribadi",
    fields: [
      ["nomor_hp", "Nomor HP"],
      ["email", "Email"],
      ["email_gov", "Email Pemerintah"],
      ["alamat", "Alamat"],
      ["npwp_nomor", "Nomor NPWP"],
      ["bpjs", "BPJS"],
    ],
  },
  {
    judul: "Status Kepegawaian",
    fields: [
      ["jenis_pegawai_id", "Jenis Pegawai ID"],
      ["jenis_pegawai_nama", "Jenis Pegawai"],
      ["kedudukan_hukum_id", "Kedudukan Hukum ID"],
      ["kedudukan_hukum_nama", "Kedudukan Hukum"],
      ["status_cpns_pns", "Status CPNS/PNS"],
      ["kartu_asn_virtual", "Kartu ASN Virtual"],
      ["nomor_sk_cpns", "Nomor SK CPNS"],
      ["tanggal_sk_cpns", "Tanggal SK CPNS"],
      ["tmt_cpns", "TMT CPNS"],
      ["nomor_sk_pns", "Nomor SK PNS"],
      ["tanggal_sk_pns", "Tanggal SK PNS"],
      ["tmt_pns", "TMT PNS"],
    ],
  },
  {
    judul: "Pangkat dan Golongan",
    fields: [
      ["gol_awal_id", "Golongan Awal ID"],
      ["gol_awal_nama", "Golongan Awal"],
      ["gol_akhir_id", "Golongan Akhir ID"],
      ["gol_akhir_nama", "Golongan Akhir"],
      ["tmt_golongan", "TMT Golongan"],
      ["mk_tahun", "Masa Kerja (Tahun)"],
      ["mk_bulan", "Masa Kerja (Bulan)"],
    ],
  },
  {
    judul: "Jabatan",
    fields: [
      ["jenis_jabatan_id", "Jenis Jabatan ID"],
      ["jenis_jabatan_nama", "Jenis Jabatan"],
      ["klasifikasi_jabatan", "Klasifikasi Jabatan"],
      ["jabatan_id", "Jabatan ID"],
      ["jabatan_nama", "Nama Jabatan"],
      ["jenjang_jabatan_jf", "Jenjang Jabatan JF"],
      ["eselon_js", "Eselon JS"],
      ["tmt_jabatan", "TMT Jabatan"],
    ],
  },
  {
    judul: "Pendidikan",
    fields: [
      ["tingkat_pendidikan_id", "Tingkat Pendidikan ID"],
      ["tingkat_pendidikan_nama", "Tingkat Pendidikan"],
      ["pendidikan_id", "Pendidikan ID"],
      ["pendidikan_nama", "Pendidikan"],
      ["tahun_lulus", "Tahun Lulus"],
      ["nama_sekolah", "Nama Sekolah"],
    ],
  },
  {
    judul: "Unit Kerja dan Instansi",
    fields: [
      ["kpkn_id", "KPKN ID"],
      ["kpkn_nama", "KPKN"],
      ["lokasi_kerja_id", "Lokasi Kerja ID"],
      ["lokasi_kerja_nama", "Lokasi Kerja"],
      ["unor_id", "UNOR ID"],
      ["unor_nama", "UNOR"],
      ["unor_induk", "UNOR Induk"],
      ["instansi_induk_id", "Instansi Induk ID"],
      ["instansi_induk_nama", "Instansi Induk"],
      ["instansi_kerja_id", "Instansi Kerja ID"],
      ["instansi_kerja_nama", "Instansi Kerja"],
      ["satuan_kerja_induk_id", "Satuan Kerja Induk ID"],
      ["satuan_kerja_induk_nama", "Satuan Kerja Induk"],
      ["satuan_kerja_kerja_id", "Satuan Kerja Kerja ID"],
      ["satuan_kerja_kerja_nama", "Satuan Kerja Kerja"],
    ],
  },
  {
    judul: "Data Tambahan",
    fields: [
      ["is_valid_nik", "Validasi NIK"],
      ["flag_ikd", "Flag IKD"],
      ["usia", "Usia"],
      ["birthday", "Birthday"],
    ],
  },
];

// Menghindari tampilan undefined, null, atau string kosong
function tampilkanNilai(nilai) {
	// console.log(nilai);
  if (nilai === null || nilai === undefined || nilai === "") {
    return "-";
  }

  if (typeof nilai === "boolean") {
    return nilai ? "Ya" : "Tidak";
  }

  return String(nilai);
}

// component
function FieldItem({ label, value }) {
  return (
    <Box
      p={3}
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="md"
      minW={0}
      bg="white"
    >
      <Text fontSize="xs" color="gray.500" mb={1}>
        {label}
      </Text>

      <Text
        fontSize="sm"
        fontWeight="medium"
        color="gray.800"
        overflowWrap="anywhere"
        whiteSpace="pre-wrap"
      >
        {tampilkanNilai(value)}
      </Text>
    </Box>
  );
} 

function BagianDetail({ judul, fields, pegawai }) {
	// console.log(fields);
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={{ base: 4, md: 5 }}
      shadow="sm"
    >
      <Heading size="md" mb={4} color="blue.700">
        {judul}
      </Heading>

      <Grid
        templateColumns={{
          base: "minmax(0, 1fr)",
          md: "repeat(2, minmax(0, 1fr))",
        }}
        gap={3}
      >
        {fields.map(([key, label]) => (
          <FieldItem
            key={key}
            label={label}
            value={pegawai?.[key]}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default function Details() {
  // const { id } = useParams();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
  const navigate = useNavigate();

  const [pegawai, setPegawai] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function getDetailPegawai(id) {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:3000/pegawai?id=${id}`,
          { signal: controller.signal }
        );

        // ,{ signal: controller.signal }

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? "Data pegawai tidak ditemukan."
              : "Gagal mengambil detail pegawai."
          );
        }

        const data = await response.json();

        // Sesuaikan jika API mengembalikan { data: {...} }
        const hasil = data.data ?? data.pegawai ?? data;
        console.log(hasil);

        setPegawai(hasil);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Terjadi kesalahan.");
        }
      } 
      finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getDetailPegawai(id);

    return () => controller.abort();
  }, [id]);

  return (
    <Container maxW="container.xl" py={6}>
      <VStack align="stretch" gap={5}>
        <HStack justify="space-between" align="center" flexWrap="wrap">
          <Box>
            <Heading size="xl" mb={2}>
              Detail Pegawai
            </Heading>

            <Text color="gray.500" fontSize="sm">
              Informasi lengkap data pegawai / ASN
            </Text>
          </Box>

          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            <LuArrowLeft />
            Kembali
          </Button>
        </HStack>

        {loading ? (
          <VStack py={12} gap={3}>
            <Spinner size="xl" color="blue.500" />
            <Text color="gray.500">Memuat data pegawai...</Text>
          </VStack>
        ) : error ? (
          <Box
            p={5}
            borderWidth="1px"
            borderColor="red.200"
            borderRadius="lg"
            bg="red.50"
          >
            <Text color="red.700" fontWeight="medium">
              {error}
            </Text>
          </Box>
        ) : pegawai ? (
          <>
            <Box
              p={5}
              bg="blue.600"
              color="white"
              borderRadius="lg"
            >
              <Text fontSize="sm" opacity={0.85}>
                Nama Pegawai
              </Text>

              <Heading size="lg" my={2}>
                {/*{tampilkanNilai(pegawai[0].gelar_depan !== "-"? `${pegawai[0].gelar_depan}. ` : "")}
                {tampilkanNilai(pegawai[0].nama)}
                {tampilkanNilai(pegawai[0].gelar_belakang !== "-"? `, ${pegawai[0].gelar_belakang}` : "")}*/}
                {pegawai[0].gelar_depan &&
				   pegawai[0].gelar_depan !== "-" &&
				   `${pegawai[0].gelar_depan.replace(/\.$/, "")}. `}

				  {tampilkanNilai(pegawai[0].nama)}

				  {pegawai[0].gelar_belakang &&
				   pegawai[0].gelar_belakang !== "-" &&
				   `, ${pegawai[0].gelar_belakang}`}
              </Heading>

              <Text fontSize="sm">
                NIP: {tampilkanNilai(pegawai[0].nip_baru)}
              </Text>

              <Text fontSize="sm" mt={1}>
                Jabatan: {tampilkanNilai(pegawai[0].jabatan_nama)}
              </Text>

              <Text fontSize="sm" mt={1}>
                Unit Kerja: {tampilkanNilai(pegawai[0].unor_nama)}
              </Text>
            </Box>

            {kelompokData.map((kelompok) => (
              <BagianDetail
                key={kelompok.judul}
                judul={kelompok.judul}
                fields={kelompok.fields}
                pegawai={pegawai}
              />
            ))}
          </>
        ) : null}
      </VStack>
    </Container>
  );
}
