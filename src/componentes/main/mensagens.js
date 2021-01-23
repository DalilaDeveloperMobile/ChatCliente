import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Mensagens from '../../models/mensagens.model';

import axios from 'axios';

function Mensagems(props) {

    //  const { mensagems } = props;

    const API_URL_CADASTRAR_MENSAGEMS = 'http://localhost:3001/chat-mensagens';

    const [mensagems, setMensagems] = useState('');

    //  const { setContatos } = props;

    //  const { contatos } = props;


    async function cadastrar(event) {
        if (event.currentTarget.checkValidity() === true) {
            try {
                const novaMensagems = new Mensagens(null, mensagems, false);
                await axios.post(API_URL_CADASTRAR_MENSAGEMS, novaMensagems);
            } catch (err) {

            }
        }
    }

    function handleTxtMensagem(event) {
        setMensagems(event.target.value);
    }


    return (
        <div>
            {props.mensagems.map(mensagem =>

            mensagem.isMe === true ?

                <div key={mensagem.id} className="d-flex justify-content-start mt-2">
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

                            <h6 style={{
                                fontStyle: 'normal',
                                fontSize: '13px', textAlign: 'right', lineHeight: '20px',
                                color: '#9A9A9A'
                            }}>{mensagem.time}</h6>

                        </div>
                    </div>
                </div>
                :
                <div key={mensagem.id} className="d-flex justify-content-end mt-2">
                    <div className="row-cols-auto">
                        <div className="col" style={{
                            background: '#DCF8C6',
                            borderRadius: '10px 10px 10px 0px'
                        }}>

                            <h6 className="pt-2" style={{
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

    }
 <div className="row">
        <footer className="col" style={{ backgroundColor: '#F5F1EE', height: '10vh' }}>
                <form onSubmit={cadastrar}>
                        <div className="row justify-content-center mt-1 " >
                            <textarea value={mensagems} onChange={handleTxtMensagem} type="text"
                                className="col-8 mt-1 " style={{
                                    width: '10%', height: '6.2vh', backgroundColor: '#FFFFFF',
                                    borderRadius: '4px', borderColor: '#FFFFFF'
                                }}>
                            </textarea>

                            <button type="button" type="submit" className="col-4" className="btn btn-light"
                                value="Submit" style={{
                                    width: '20%', height: '6px', backgroundColor: '#F5F1EE',
                                    borderColor: '#F5F1EE'
                                }}>
                                <FontAwesomeIcon icon={faPlay} className="fa-lg" />
                            </button>
                        </div>
                    </form>
                    </footer>
                    </div>
              </div>
              
    )

}

export default Mensagems;