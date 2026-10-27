import { useLocation } from "react-router-dom";
import { menus } from "../data/menu";
import { Box, Center, Flex } from "@chakra-ui/react";


function Header({ ...props }) {

    const location = useLocation();

    const icon = menus.find(item => item.path === location.pathname);
    const Icon = icon.icon;

    const page = menus.find(
        (item) => item.path === location.pathname
    );

    // console.log(page);

    return (
        <Flex
            {...props} 
            alignItems="center"
            pl="20px" 
            h="50px" 
            // bg="gray.500"
        >

            <Flex alignItems="center" gap={4}>
                <Icon />
                {page?.title}
            </Flex>            
        </Flex>
    );
}

export default Header;