import React, { useState } from 'react';
import axios from 'axios';
import Mensagens from '../../models/mensagens.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
//import message from '../../data/message.json';
//import MessageLeft from '../main/MessageLeft';
//import MessageRight from '../main/MessageRight';
//import Chat from '../../chat';

function CriarMensagens(props) {

    const API_URL_CADASTRAR_MENSAGENS = 'http://localhost:3001/chat-mensagens';
  
    const [mensagem, setMensagem] = useState('');

    async function cadastrar(event) {
      event.preventDefault();
      
      if (event.currentTarget.checkValidity() === true) {
        try{
         const novaMensagem = new Mensagens(null, mensagem, false);
         await axios.post(API_URL_CADASTRAR_MENSAGENS, novaMensagem);
        
        }catch(err){
        
        }
      }
    }
  
    function handleTxtMensagem(event) {
      setMensagem(event.target.value);
    }

    return ( 
      <form  onSubmit={cadastrar}>
        <div className="row justify-content-center mt-1 " >
          <textarea  value={mensagem} onChange={handleTxtMensagem} type="text"
           className="col-8 mt-1 " style={{
            width: '10%', height: '6.2vh', backgroundColor: '#FFFFFF',
            borderRadius: '4px', borderColor: '#FFFFFF'
          }} >
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

      //name="mensagem" 
          
    );
  
}
    

export default CriarMensagens;