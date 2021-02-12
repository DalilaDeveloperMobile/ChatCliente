import React, { useState, useEffect } from 'react';
//import { makeStyles } from '@material-ui/styles';
//import { Container } from '@material-ui/core';
import './chat.css';
import Header from './componentes/header';
import Aside from './componentes/aside';
import Mensagems from './componentes/main/mensagens';

import axios from 'axios';

function Chat() {

  // LISTAR_CONTATOS.
  const API_URL_LISTAR_CONTATOS = 'http://localhost:3001/chat-contatos';

  // LISTAR_MENSAGENS.
  const API_URL_LISTAR_MENSAGENS = 'http://localhost:3001/chat-mensagens';
  //const API_URL_CADASTRAR_MENSAGEMS = 'http://localhost:3001/chat-mensagens';

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

  return (
    <div className="container-fluid">
      <div className="row">
        <header className="col-sm-12">
          <Header />
        </header>
      </div>

      <div className="row">
        <aside id="container" className="col-sm-3">
          <div className="row" >
            <div className="p-1" className="divInput2">
              <input id="Input2Aside" placeholder="&#xF002; Pesquisar contato"
                // LISTAR_CONTATOS.
                value={filtroContato}
                onChange={handleFiltrar}
                className="filtro-contato"
                totalContatos={totalContatos}
              />
            </div>
          </div>
          <Aside
            setContatos={setContatos}
            contatos={contatos}
            recarregarContatos={setCarregarContatos} />
        </aside>

        <main className="col-sm-9">
        <div className="divInput1" className="row justify-content-center p-1">
            <input id="Input1Main" placeholder="&#xF002; Pesquisar mensagem"
              // LISTAR_MENSAGENS.
              value={filtroMensagems}
              onChange={handleFiltrarMensagens}
              className="filtro-mensagem"
              totalContatos={totalMensagems}
            />
          </div>
          <Mensagems
            mensagems={mensagems}
            recarregarMensagems={setCarregarMensagems} />
        </main>
      </div>
    </div>
  );
};

export default Chat;
