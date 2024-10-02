// Importa React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/Home.jsx";

// Renderiza la aplicación React en el elemento con id 'app'
ReactDOM.createRoot(document.getElementById("app")).render(<Home />);