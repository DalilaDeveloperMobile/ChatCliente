import React, { useState, useEffect } from 'react';
import './chat.css';
import Header from './componentes/header';
import Aside from './componentes/aside';
//import Main from './componentes/main';
//import Footer   from './componentes/footer';
//import contacts from '../src/data/contacts.json';
//import message from '../src/data/message.json';
//import MessageLeft from './componentes/main/MessageLeft';
//import MessageRight from './componentes/main/MessageRight';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Mensagens from '../src/models/mensagens.model';
import Mensagems from './componentes/main/mensagens';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

function Chat() {

  // const {mensagem} = props;

  // LISTAR_CONTATOS.
  const API_URL_LISTAR_CONTATOS = 'http://localhost:3001/chat-contatos';

  // LISTAR_MENSAGENS.
  const API_URL_LISTAR_MENSAGENS = 'http://localhost:3001/chat-mensagens';
  const API_URL_CADASTRAR_MENSAGENS = 'http://localhost:3001/chat-mensagens';

  // LISTAR_CONTATOS.
  const [contatos, setContatos] = useState([]);
  const [carregarContatos, setCarregarContatos] = useState(true);
  const [totalContatos, setTotalContatos] = useState(0);
  const [filtroContato, setFiltroContato] = useState('');

  // LISTAR_MENSAGENS.
  const [mensagems, setMensagems] = useState([]);
  const [carregarMensagems, setCarregarMensagems] = useState(true);
  const [totalMensagems, setTotalMensagems] = useState(0);
  const [filtroMensagems, setFiltroMensagems] = useState('');

  // LISTAR_CONTATOS.
  useEffect(() => {
    async function obterContatos() {
      try {
        const params = `?filtro-contato=${filtroContato}`;
        let { data } = await axios.get(API_URL_LISTAR_CONTATOS + params);
        setTotalContatos(data.totalContatos);
        setContatos(data.contatos);
      } catch (err) {
        setContatos([]);
      }
    }
    if (carregarContatos) {
      obterContatos();
      setCarregarContatos(false);
    }
  }, [carregarContatos, filtroContato]);

  function handleFiltrar(event) {
    setFiltroContato(event.target.value);
    setCarregarContatos(true);
  }

  // LISTAR_MENSAGENS.
  useEffect(() => {
    async function obterMensagems() {
      try {
        const params = `?filtro-mensagem=${filtroMensagems}`;
        let { data } = await axios.get(API_URL_LISTAR_MENSAGENS + params);
        setTotalMensagems(data.totalMensagems);
        setMensagems(data.mensagems);
      } catch (err) {
        setMensagems([]);
      }
    }
    if (carregarMensagems) {
      obterMensagems();
      setCarregarMensagems(false);
    }
  }, [carregarMensagems, filtroMensagems]);

  function handleFiltrarMensagens(event) {
    setFiltroMensagems(event.target.value);
    setCarregarMensagems(true);
  }

  // CADASTRAR_MENSAGENS
  async function cadastrar(event) {
    event.preventDefault();

    if (event.currentTarget.checkValidity() === true) {
      try {
        const novaMensagem = new Mensagens(null, mensagems, false);
        await axios.post(API_URL_CADASTRAR_MENSAGENS, novaMensagem);

      } catch (err) {

      }
    }
  }

  function handleTxtMensagem(event) {
    setMensagems(event.target.value);
  }




  //  const FiltrarContacts = (text) => {
  //    setContacts(contacts.filter((c) => c.name.toUpperCase().includes(text.toUpperCase())));
  //  }

  return (
    <div className="container-fluid">
      <div className="row">
        <header className="col-sm-12" style={{ backgroundColor: '#eeeeee', height: '9vh' }}>
          <Header />
        </header>
      </div>

      <div className="row" >
        <div className="col p-1" style={{ backgroundColor: '#F7F7F7', height: '40px' }}>
          <input className="col-3" style={{ width: '25%' }}
            // LISTAR_CONTATOS.
            value={filtroContato}
            onChange={handleFiltrar}
            className="filtro-contato"
            totalContatos={totalContatos}
          />
        </div>
      </div>

      <div className="row" >
        <aside className="col-sm-3" style={{ backgroundColor: '#FFFFFF' }}>
          <Aside
            contatos={contatos}
            recarregarContatos={setCarregarContatos} />
        </aside>

        <main className="col-sm-9" style={{ backgroundColor: '#F7F7F7' }}>

          <div className="p-1 d-flex justify-content-center" style={{ backgroundColor: '#F7F7F7', height: '40px' }}>
            <input className="col-3" style={{ width: '40%', backgroundColor: '#F7F7F7'}}
              // LISTAR_MENSAGENS.
              value={filtroMensagems}
              onChange={handleFiltrarMensagens}
              className="filtro-mensagem"
              totalContatos={totalMensagems}
            />
          </div>

          <Mensagems
           mensagems={mensagems}
           recarregarMensagems={setCarregarMensagems}/>

        </main>
      </div>

      <div className="row justify-content-end">
        <footer className="col-sm-9" style={{ backgroundColor: '#F5F1EE', height: '10vh' }}>

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

    // setLiveMessage={setLiveMessage}

  );
};

export default Chat;
