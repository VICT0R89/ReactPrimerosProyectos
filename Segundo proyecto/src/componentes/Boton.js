import React from "react";
import "../styles/Boton.css"

function Boton({ texto, esBotonDeClick, manejarClick }){

return (
    <button
    className={esBotonDeClick ? "botonClick" : "botonReiniciar"}
    onClick={manejarClick}>
    {texto}
    <span id="span1"></span>
    <span id="span2"></span>
    <span id="span3"></span>
    <span id="span4"></span>
    </button>
);

}

export default Boton;
