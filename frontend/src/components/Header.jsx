import { useLocation } from "react-router-dom";
import { menus } from "../data/menu";

function Header() {

    const location = useLocation();

    const page = menus.find(
        (item) => item.path === location.pathname
    );

    return (
        <header className="header">

            <h2>{page?.title}</h2>

        </header>
    );
}

export default Header;