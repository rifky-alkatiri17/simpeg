import {
    FaHome,
    FaUsers,
    FaDatabase,
    FaChartBar,
    FaUserCircle,
} from "react-icons/fa";

export const menus = [
    {
        title: "Dashboard",
        path: "/",
        icon: FaHome,
    },
    {
        title: "Pegawai",
        path: "/pegawai",
        icon: FaUsers,
    },
    {
        title: "Master",
        path: "/master",
        icon: FaDatabase,
    },
    {
        title: "Laporan",
        path: "/laporan",
        icon: FaChartBar,
    },
    {
        title: "Profil",
        path: "/profil",
        icon: FaUserCircle,
    },
];