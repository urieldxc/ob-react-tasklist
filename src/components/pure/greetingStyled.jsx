import React from 'react';
import { useState } from 'react';
// Definiendo estilos en constantes.

//Estilos si esta logueado
const loggedStyle = {
    color: 'blue'
}
//Estilos si no estan logueados
const unloggedStyle = {
    color: 'tomato',
    fontWeight: "bold"
}
const GreetingStyled = (props) => {

    // generamos un estado para controlar si el usuario esta logueado o no

    const [logged, setLogged] = useState(false);


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            <p>Hola, {props.name}</p>
            <button onClick={() =>{
                console.log("boton pulsado");
                //esto es para hacer lo contrario!
                setLogged(!logged)
            }}>
                {logged ? "Logout": "Login"}
            </button>
        </div>
    );
}

export default GreetingStyled;
