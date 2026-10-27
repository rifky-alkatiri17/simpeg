import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
    Box,
    Flex,
    Grid,
    IconButton,
    Text,
    VStack
} from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

export default function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
    <Grid
        templateColumns={{
            base: "minmax(0, 1fr)",
            md: isSidebarOpen? "240px minmax(0, 1fr)" : "40px minmax(0, 1fr)"
        }}
        templateRows="60px minmax(0, 1fr)" 
        templateAreas={{base:`
                            "header"
                            "content"
                        `,
                        md:`
                            "sidebar header"
                            "sidebar content"
                        `}}
        h="100vh"
    >       
       <Sidebar 
        gridArea="sidebar" 
        isOpen={isSidebarOpen} 
        onToggle={ ()=>setIsSidebarOpen(prev=>!prev)}
        display={{base:"none", md:"block"}} 
        />
       <Header gridArea="header"/>
       <Box gridArea="content" overflowY="scroll" p={6} pb={{base:8, md:4}}>
            <Outlet />
       </Box>                      
       <BottomNav display={{base:"flex", md:"none"}}/>
    </Grid>
    )
}