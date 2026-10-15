import {
    FaHome,
    FaUsers,
    FaDatabase,
    FaChartBar,
    FaUserCircle,
    FaEye
} from "react-icons/fa";

export const menus = [{
        title: "Dashboard",
        path: "/",
        icon: FaHome,
    },
    {
        title: "Master",
        path: "/master",
        icon: FaDatabase,
    },
    {
        title: "Pegawai",
        path: "/pegawai",
        icon: FaUsers,
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
    {
        title: "Details",
        path: "/details",
        icon: FaEye,
    }    
];