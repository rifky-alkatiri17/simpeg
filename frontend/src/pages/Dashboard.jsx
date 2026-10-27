
import { SimpleGrid, Box, Flex, Text, Heading, Icon, Button, Table, Badge } from "@chakra-ui/react";
import {
  LuUsers,
  LuUserCheck,
  LuUserRound,
  LuBuilding2,
  LuChartColumn,
  LuClipboardList,
  LuArrowRight,
  LuSearch,
} from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // Data sementara, ganti dengan data dari API
  const statistik = [
    {
      title: "Total Pegawai",
      value: "7.000+",
      icon: LuUsers,
      color: "blue",
    },
    {
      title: "PNS",
      value: "—",
      icon: LuUserCheck,
      color: "green",
    },
    {
      title: "PPPK",
      value: "—",
      icon: LuUserRound,
      color: "purple",
    },
    {
      title: "Unit Organisasi",
      value: "—",
      icon: LuBuilding2,
      color: "orange",
    },
  ];

  const pegawaiTerbaru = [
    {
      id: 1,
      nip_baru: "198xxxxxxxxxxxxx",
      nama: "Contoh Nama Pegawai",
      status_cpns_pns: "PNS",
      unor_nama: "Contoh Unit Organisasi",
    },
  ];

  return (
    <Box p={{ base: 3, md: 6 }}  minH="100%">
      {/* Judul Dashboard */}
      <Box mb={6}>
        <Heading size="lg">Dashboard</Heading>
        <Text fontSize="sm" mt={1}>
          Ringkasan informasi kepegawaian ASN
        </Text>
      </Box>

      {/* Kartu Statistik */}
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} mb={6}>
        {statistik.map((item) => (
          <Box
            key={item.title}
            p={{ base: 3, md: 5 }}
            rounded="lg"
            borderWidth="1px"
          >
            <Flex justify="space-between" align="center" mb={4}>
              <Text color="gray.600" fontSize="sm">
                {item.title}
              </Text>
              <Icon
                as={item.icon}
                boxSize={5}
                color={`${item.color}.500`}
              />
            </Flex>

            <Heading size={{ base: "lg", md: "xl" }}>
              {item.value}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>

      {/* Akses Cepat */}
      <Box p={5} rounded="lg" borderWidth="1px" mb={6}>
        <Heading size="md" mb={4}>
          Akses Cepat
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={3}>
          <Button
            variant="outline"
            justifyContent="space-between"
            onClick={() => navigate("/pegawai")}
          >
            <Flex align="center" gap={2}>
              <LuUsers />
              Data Pegawai
            </Flex>
            <LuArrowRight />
          </Button>

          <Button
            variant="outline"
            justifyContent="space-between"
            onClick={() => navigate("/pegawai")}
          >
            <Flex align="center" gap={2}>
              <LuSearch />
              Cari Pegawai
            </Flex>
            <LuArrowRight />
          </Button>

          <Button
            variant="outline"
            justifyContent="space-between"
            onClick={() => navigate("/laporan")}
          >
            <Flex align="center" gap={2}>
              <LuChartColumn />
              Laporan
            </Flex>
            <LuArrowRight />
          </Button>
        </SimpleGrid>
      </Box>

      {/* Pegawai Terbaru */}
      <Box p={5} rounded="lg" borderWidth="1px">
        <Flex
          justify="space-between"
          align="center"
          gap={3}
          mb={4}
          wrap="wrap"
        >
          <Box>
            <Heading size="md">Pegawai Terbaru</Heading>
            <Text color="gray.600" fontSize="sm" mt={1}>
              Ringkasan data pegawai
            </Text>
          </Box>

          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/pegawai")}
          >
            Lihat Semua
          </Button>
        </Flex>

        <Box overflowX="auto">
          <Table.Root size="sm" minW="650px">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>NIP</Table.ColumnHeader>
                <Table.ColumnHeader>Nama</Table.ColumnHeader>
                <Table.ColumnHeader>Status</Table.ColumnHeader>
                <Table.ColumnHeader>Unit Organisasi</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {pegawaiTerbaru.map((item) => (
                <Table.Row
                  key={item.id}
                  cursor="pointer"
                  _hover={{ bg: "blue.600" }}
                  onClick={() =>
                    navigate(`/details?id=${item.id}`)
                  }
                >
                  <Table.Cell>{item.nip_baru}</Table.Cell>
                  <Table.Cell>{item.nama}</Table.Cell>
                  <Table.Cell>
                    <Badge colorPalette="green">
                      {item.status_cpns_pns}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>{item.unor_nama}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </Box>
  );
}
