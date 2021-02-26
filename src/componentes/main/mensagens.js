import React, { useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
//import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Mensagens from '../../models/mensagens.model';
//import RemoverMensagens from '../main/Remover/remover-mensagens'


import './main.css';

import axios from 'axios';

function Mensagems(props) {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
           <h1 onClick={handleRemoverMensagens}>Apagar</h1>
          </Popover.Content>
        </Popover>
      );

    //  CADASTRAR_MENSAGEMS
    const API_URL_CADASTRAR_MENSAGEMS = 'http://localhost:3001/chat-mensagens';

    const [mensagems, setMensagems] = useState('');

    //  REMOVER_MENSAGENS
     const API_URL_REMOVER_MENSAGENS = 'http://localhost:3001/chat-mensagens/';

    //  REMOVER_MENSAGENS
    async function handleRemoverMensagens() {
        window.location.reload();
         try {
             await axios.delete(API_URL_REMOVER_MENSAGENS + props.mensagem.id);
             props.recarregarMensagens(true);
         } catch (err) {

       }
     }

    //  CADASTRAR_MENSAGEMS
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

    // <h1 className="col align-self-end ">
    // <RemoverMensagens mensagems={mensagems} carregarMensagens={props.carregarMensagens} />
    // </h1>
    // As horas das mensagens não estão aparecendo.

    var date = new Date();
    var horaTime = date.getHours() + ":" + date.getMinutes();

    return (
        <div>
            <div id="container">
                {props.mensagems.map(mensagem =>

                    mensagem.isMe === true ?

                        <div key={mensagem.id} className="d-flex justify-content-start mt-2">
                            <div className="row-cols-auto">
                                <div id="balaoEsq" className="col">
                                    <h6 id="balaoMsgEsq" className="pt-2">
                                        {mensagem.descricao}
                                    </h6>
                                    <div className="row">
                                       <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <h1 id="ItemRemoverMsg" className="col">
                                            <FontAwesomeIcon icon={faAngleDown} className="fa-lm" /></h1>
                                        </OverlayTrigger>
                                        <h6 id="balaoTimeEsq" className="col">
                                            {mensagem.time ? mensagem.time : horaTime}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div key={mensagem.id} className="d-flex justify-content-end mt-2">
                            <div className="row-cols-auto">
                                <div id="balaoDir" className="col">
                                    <h6 id="balaoMsgDir" className="pt-2">
                                        {mensagem.descricao}
                                    </h6 >
                                    <div className="row">
                                        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                                        <h1 id="ItemRemoverMsg" className="col">
                                            <FontAwesomeIcon icon={faAngleDown} className="fa-lm" /></h1>
                                        </OverlayTrigger>

                                        <h6 id="balaoTimeDir" className="col">
                                            {mensagem.time ? mensagem.time : horaTime}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
                }


            </div>

            <br />
            <br />
            <br />

            <div className="row">
                <footer id="fundoInput" className="col">
                    <form onSubmit={cadastrar}>
                        <div className="row justify-content-center mt-1 " >
                            <textarea id="textInput" placeholder="Digite uma mensagem" value={mensagems} onChange={handleTxtMensagem} type="text"
                                className="col-8 mt-1">
                            </textarea>
                            <button id="botaoInput" type="button" type="submit" className="col-4" className="btn btn-light"
                                value="Submit">
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