import { NavLink } from "react-router-dom";
import { menus } from "../data/menu";
import {
    Box,
    Flex,
    Grid,
    Text    
} from "@chakra-ui/react";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="logo">SIM ASN</h2>

            {menus.slice(0, 5).map((menu) => {
                const Icon = menu.icon;

                return (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            isActive ? "menu active" : "menu"
                        }
                    >
                        <Icon size={20} />

                        <span>{menu.title}</span>
                    </NavLink>
                );
            })}
        </aside>
    );
}

export default Sidebar;