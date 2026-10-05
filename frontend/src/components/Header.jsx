import { useLocation } from "react-router-dom";
import { menus } from "../data/menu";
import { Box, Center } from "@chakra-ui/react";


function Header() {

    const location = useLocation();

    const page = menus.find(
        (item) => item.path === location.pathname
    );

    return (
        <Box className="header">
            {page?.title}
        </Box>
    );
}

export default Header;