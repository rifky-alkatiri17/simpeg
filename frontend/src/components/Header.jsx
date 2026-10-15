import { useLocation } from "react-router-dom";
import { menus } from "../data/menu";
import { Box, Center, Flex } from "@chakra-ui/react";


function Header() {

    const location = useLocation();

    const icon = menus.find(item => item.path === location.pathname);
    const Icon = icon.icon;

    const page = menus.find(
        (item) => item.path === location.pathname
    );

    console.log(page);

    return (
        <Flex className="header" gap="4">
            <Icon />
            {page?.title}            
        </Flex>
    );
}

export default Header;