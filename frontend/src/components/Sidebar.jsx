import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menus } from "../data/menu";
import {
    Box,
    Flex,
    Grid,
    IconButton,
    Text,
    VStack
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa"
import { LuPanelLeftOpen, LuPanelLeftClose } from "react-icons/lu";


export default function Sidebar({
    isOpen,
    onToggle,
    ...props
}) {


    return (
        <Box
            {...props}                      
            // backgroundColor="gray.700"
            borderRightWidth="1px"
        >
            <Flex
                align="center"
                justify={isOpen ? "space-between" : "center"}
                p={isOpen ? 3 : 1}
                mb={1}
            >
                {isOpen && (
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        className="logo"
                    >
                        SIM ASN
                    </Text>
                )}

                <IconButton
                    aria-label={
                        isOpen
                            ? "Minimize sidebar"
                            : "Maximize sidebar"
                    }
                    variant="ghost"
                    size="xl"
                    onClick={onToggle}
                >
                    {isOpen
                        ? <LuPanelLeftClose />
                        : <LuPanelLeftOpen />
                    }
                </IconButton>
            </Flex>

            {menus.slice(0, 5).map((menu) => {
                const Icon = menu.icon;

                return (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            isActive
                                ? "menu active"
                                : "menu"
                        }
                    >
                        <Flex
                            align="center"
                            justify={isOpen ? "start" : "center"}
                            gap={2}
                            p={3}
                            borderRadius="md"
                            _hover={{ bg: "blue.600" }}
                            whiteSpace="nowrap"
                        >
                            <Icon size={20} />

                            {isOpen && (
                                <Text>{menu.title}</Text>
                            )}
                        </Flex>
                    </NavLink>
                );
            })}
        </Box>
    );
}

{
    /*<Grid 
        templateColumns="repeat(1, minmax(0,1fr))"            
        backgroundColor="gray.700"
    >

        <Flex
            align="center"
            justify="center"
            p={3}
            mb={1}
          >
            
          <Text fontSize="lg" fontWeight="bold" className="logo">
            SIM ASN
          </Text>

            <IconButton
              // aria-label={isOpen ? "Minimize sidebar" : "Maximize sidebar"}
              // variant="ghost"
              size="xl"
              // onClick={() => setIsOpen(!isOpen)}
            >
              <LuPanelLeftClose /> : <LuPanelLeftOpen />
            </IconButton>
        </Flex>

      {menus.slice(0, 5).map(menu => {            
        const Icon = menu.icon; 
            return(       
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
                gap={1}
              >
                <Flex align="center" gap={2} p={3} borderRadius="md" _hover={{bg: "blue.600"}} >
                  <Icon size={20} />
                  <Text>{menu.title}</Text>
                </Flex>
              </NavLink>
            );       
        })}
    </Grid>*/
}


{
    /*<aside className="sidebar">
        <Flex justify="space-evenly" gap={3} onClick={()=>setIsOpen(!isOpen)}>
            <h2 className="logo">{isOpen && "SIM ASN"}</h2>
            {isOpen? <LuPanelLeftClose /> : < LuPanelLeftOpen /> }
        </Flex>

        {menus.slice(0, 5).map((menu) => {
            const Icon = menu.icon; // not chakra component

            return (
                <NavLink
                    key={menu.path}
                    to={menu.path}
                    className={({ isActive }) =>
                        isActive ? "menu active" : "menu"
                    }
                >
                    <Icon size={20} />
                    {isOpen &&
                        <span>{menu.title}</span>
                    }
                    
                </NavLink>
            );
        })}
    </aside>*/
}