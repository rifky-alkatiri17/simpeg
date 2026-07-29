import { NavLink } from "react-router-dom";
import { menus } from "../data/menu";

function BottomNav() {
    return (
        <nav className="bottom-nav">

            {menus.map((menu) => {

                const Icon = menu.icon;

                return (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            isActive ? "bottom-item active" : "bottom-item"
                        }
                    >
                        <Icon size={20} />

                        <small>{menu.title}</small>

                    </NavLink>
                );
            })}
        </nav>
    );
}

export default BottomNav;