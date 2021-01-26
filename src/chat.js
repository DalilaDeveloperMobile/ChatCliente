import React, { useState, useEffect } from 'react';
//import { makeStyles } from '@material-ui/styles';
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
//import Mensagens from '../src/models/mensagens.model';
import Mensagems from './componentes/main/mensagens';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPlay } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';



//const useStyles = makeStyles((theme) =>({
//main
// areaMain: {
//   minHeight: '100vh',
// },
//Pesquisa Contatos
//  divInput1: {
//    backgroundColor: '#F7F7F7',
//    height: '40px',
//  },
//  input1: {
//    width: '25vh',
//  },
//}));

function Chat() {
  //  const classes = useStyles();


  // const {mensagem} = props;

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

  //  const FiltrarContacts = (text) => {
  //    setContacts(contacts.filter((c) => c.name.toUpperCase().includes(text.toUpperCase())));
  //  }

  return (
    <div className="container-fluid">
      <div className="row">
        <header className="col-sm-12" style={{
          backgroundColor: '#eeeeee',
          height: '9vh'
        }}>
          <Header />
        </header>
      </div>

      <div className="row">
        <aside className="col-sm-3" style={{ backgroundColor: '#FFFFFF', minHeight: '85vh' }}>

          <div className="row" >
            <div className=" pt-1" style={{
              backgroundColor: '#F7F7F7',
              height: '40px'
            }}>
              <input placeholder="Pesquisar contato" style={{ width: '100%' }}
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

        <main className="col-sm-9" style={{ backgroundColor: '#F7F7F7', minHeight: '85vh' }}>

          <div className="p-1 d-flex justify-content-center" style={{ backgroundColor: '#F7F7F7', height: '40px' }}>
            <input placeholder="Pesquisar mensagem" className="col-3" style={{ width: '40%', backgroundColor: '#F7F7F7' }}
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

    // setLiveMessage={setLiveMessage}

  );
};

export default Chat;
