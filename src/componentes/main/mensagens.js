import React from 'react';

function Mensagems(props) {
 
    const { mensagems } = props;

    return (
       props.mensagems.map(mensagem => 
         
           mensagem.isMe === true ?

                <div key={mensagems.id} className="d-flex justify-content-start mt-2">
                    <div className="row-cols-auto">
                        <div className="col" style={{
                            background: '#FFFFFF',
                            borderRadius: '10px 10px 10px 0px'
                        }}>

                            <h6 className="pt-2" style={{
                                fontStyle: 'normal',
                                fontSize: '15px', lineHeight: '20px',
                                color: '#333333'
                            }}>{mensagem.descricao}</h6>

                            <h6  style={{
                                fontStyle: 'normal',
                                fontSize: '13px', textAlign: 'right', lineHeight: '20px',
                                color: '#9A9A9A'
                            }}>{mensagem.time}</h6>

                        </div>
                    </div>
                </div>
            :
                <div key={mensagems.id} className="d-flex justify-content-end mt-2">
                    <div className="row-cols-auto">
                        <div className="col" style={{
                            background: '#DCF8C6',
                            borderRadius: '10px 10px 10px 0px'
                        }}>

                            <h6  className="pt-2" style={{
                                fontStyle: 'normal',
                                fontSize: '15px', lineHeight: '20px',
                                color: '#333333'
                            }}>{mensagem.descricao}</h6 >

                            <h6 style={{
                                fontStyle: 'normal',
                                fontSize: '13px', textAlign: 'right', lineHeight: '20px',
                                color: '#9A9A9A'
                            }}>{mensagem.time}</h6>

                        </div>
                    </div>
                </div>
        )

    )                        

}

export default Mensagems;