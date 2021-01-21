import React from 'react';

function Aside(props) {

    const { contatos } = props;

    return (
        props.contatos.map(contato =>
            <div key={contatos.id} data-testid="contatos">
                <div className="row mt-1">
                    <div className="Item1 col-xs align-self-center" style={{
                        margin: '5px', backgroundColor: ' #C4C4C4',
                        height: '6vh', width: '40px'
                    }}></div>

                    <h1 className="text-center" className="col ml-3 align-self-center " style={{
                        fontSize: '90%',
                        fontFamily: ' Arial, Helvetica, sans-serif', fontStyle: 'normal', fontWeight: 'bold', color: '#000000'
                    }} >{contato.name}</h1>

                    <h1 className="col-sm d-flex justify-content-end align-self-end" style={{ 
                        fontSize: '87%',
                        fontFamily: 'Helvetica Neue', fontStyle: 'normal', fontWeight: 'bold', color: ' #C4C4C4'
                    }} >{contato.time}</h1>

                    <hr className="row mt-1 " style={{
                        width: '97%',
                        height: '1px', background: '#F7F7F7'
                    }} />
                   
                </div>
            </div>
            


        )
    )

}

export default Aside;

