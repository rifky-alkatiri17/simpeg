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

function BottomNav(props) {
    return (
        <Flex
            {...props}
            // pos="fixed"
            // bottom={0}
            // left={0}
            w="100%"
            boxSizing="border-box"
            justifyContent="center"
            // bg="gray.500"
            borderTopWidth="3px" 
            py="10px"           
            h="70px"
        >
            {menus.slice(0, 5).map((menu) => {
                const Icon = menu.icon;

                return (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            isActive
                                ? "bottom-item active"
                                : "bottom-item"
                        }
                        style={{
                            flex: 1,
                            minWidth: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Icon size={20} c="black.500"/>
                        <small>{menu.title}</small>
                    </NavLink>
                );
            })}
        </Flex>
    );
}

export default BottomNav;