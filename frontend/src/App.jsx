import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Pegawai from "./pages/Pegawai";
import Master from "./pages/Opd";
import Laporan from "./pages/Laporan";
import Profil from "./pages/Profil";

function App() {

    return (
        <Routes>

            <Route element={<MainLayout />}>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/master"
                    element={<Master />}
                />

                <Route
                    path="/pegawai"
                    element={<Pegawai />}
                />

                <Route
                    path="/laporan"
                    element={<Laporan />}
                />

                <Route
                    path="/profil"
                    element={<Profil />}
                />

            </Route>

        </Routes>
    );
}

export default App;