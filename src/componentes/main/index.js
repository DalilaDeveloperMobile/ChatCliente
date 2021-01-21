import React from 'react';


function Main(props) {
    return (
        <>
            <div className="textoLeft">
                <p className="mensagem">{props.descricao}</p>
                <p className="hora">{props.time}</p>
            </div>

            <div className="textoRight">
                <p className="mensagem2">{props.descricao}</p>
                <p className="hora2">{props.time}</p>
            </div>

        </>
    );
}

export default Main;