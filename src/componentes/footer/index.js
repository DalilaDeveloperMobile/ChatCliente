//import React, { useState } from 'react';
//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
//import Chat from '../../chat';
//import axios from 'axios';
//import Mensagens from '../../models/mensagens.model';
//import Chat from '../../chat';
//import MessageLeft from '../main/MessageLeft';
//import MessageRight from '../main/MessageRight';
//import Datetime from '../Datetime';
//import Timer from '../Timer';
//import { render } from 'react-dom';

function Footer(props) {
 //const { setLiveMessage } = props; // resgatando a funcao
 const { handleTxtMensagem, cadastrar, mensagems } = props;
 
 // function handleSubmit(event) {
 //   event.preventDefault();
 //   const newMessage = event.target.elements.message.value;
    // <Timer date = {new Date()}/>

 //   var date = new Date();
 //   var horaAtual = date.getHours()+":"+date.getMinutes();

//    var obj = [
//      {
//      id: 1,
//      descricao: newMessage,
//      time: horaAtual, // colocar a hora atual do sistema
//      isMe: true // eh true porque quem envia a mensagem SEMPRE sou eu
//    } 
//  ]
//     console.log(cadastrar);
    
//    setLiveMessage(
//      (oldMessage) => oldMessage.push(obj) // oldMessage contem as mensagens que já estao em liveMessage 
//      );
    

    // localStorage.setItem('mensagem', JSON.stringify(message));
    // window.location.reload();
  

 //   <div>
 //   <p>{mensagem}</p>
 //   <div/>
  

  //    <form onSubmit={handleSubmit}>
  //      <input type="text" name="message" placeholder="Nome de usuário" required />
  //      <button type="submit">Entrar</button>
  //    </form>
  return ( 
    <form  onSubmit={cadastrar}>
      <div className="row justify-content-center mt-1 " >
        <textarea  value={mensagems} onChange={handleTxtMensagem} type="text"
         name="mensagems" className="col-8 mt-1 " style={{
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
        
  );
      
};      

export default Footer;