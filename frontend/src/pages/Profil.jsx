import { useState } from "react";
import { Box, Button, Text, Collapsible, IconButton, Flex, Heading } from "@chakra-ui/react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";


function Profil() {
    const [isOpen, setIsOpen] = useState(true);

    return(
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          {/* Header card */}
          <Flex justify="space-between" align="center">
            <Heading size="md">Data Pegawai</Heading>

            <IconButton
              aria-label={isOpen ? "Minimize" : "Maximize"}
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <LuChevronUp /> : <LuChevronDown />}
            </IconButton>
          </Flex>

          {/* Isi card */}
          <Collapsible.Root open={isOpen}>
            <Collapsible.Content>
              <Box mt={4}>
                <Text>Nama: Rifki Alkatiri</Text>
                <Text>NIP: 199xxxxxxxxxxxxx</Text>
                <Text>Jabatan: Penata Kelola Sistem dan Teknologi Informasi</Text>
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>
        </Box>
    )
}

export default Profil;