/* import { BrowserRouter } from "react-router-dom";*/


import React from "react";
import ReactDOM from "react-dom/client";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "@/components/ui/provider"

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
