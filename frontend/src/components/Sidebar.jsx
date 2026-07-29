import { NavLink } from "react-router-dom";
import { menus } from "../data/menu";

function Sidebar() {
    return (
        <aside className="sidebar">

            <h2 className="logo">SIM ASN</h2>

            {menus.map((menu) => {

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