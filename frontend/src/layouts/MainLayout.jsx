import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

function MainLayout() {

    return (
        <>

            <Sidebar />

            <section className="main">

                <Header />

                <div className="content">

                    <Outlet />

                </div>

            </section>

            <BottomNav />

        </>
    );
}

export default MainLayout;