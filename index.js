// 1- tener la variable React en el scope
// 2- tener la variable ReactDOM en el scope
// 3- tener la variable App en el scope
// 4- renderizar App en el DOM
import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App"
import "./estilos.css"



ReactDOM.render(<App/>,document.getElementById ('root'))