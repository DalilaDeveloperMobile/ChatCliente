import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Modal} from 'react-bootstrap';
import { A } from 'hookrouter';
import Contatos from '../../models/contatos.model';
//import PropTypes from 'prop-types';
//import AtualizarContato from '../aside/Atualizar/atualizar-contatos';
//import AdicionarContatos from '../aside/Adicionar/adicionar-contatos';
import RemoverContato from '../aside/Remover/remover-contatos';
import axios from 'axios';
import './aside.css';
import Images from '../../images/contatos.png';

function Aside(props) {

    const API_URL = 'http://localhost:3001';
    
    // Adicionar Contatos
    const API_URL_CADASTRAR_CONTATOS = API_URL + '/chat-contatos';

    const [contatos, setContatos] = useState('');
    const [formValidado, setFormValidado] = useState(false);
    const [exibirModal, setExibirModal] = useState(false);

    // Atualizar Contatos
    const API_URL_ATUALIZAR_CONTATOS = API_URL + '/chat-contatos/';

    const [contato, setContato] = useState('');
    const [formValidado2, setFormValidado2] = useState(false);
    const [exibirModal2, setExibirModal2] = useState(false);
    const [carregarContatos, setcarregarContatos] = useState(true);

    // Adicionar Contato
    async function cadastrar(event) {
        setFormValidado(true);
        if (event.currentTarget.checkValidity() === true) {
            try {
                const novaContato = new Contatos(null, contatos, false);
                await axios.post(API_URL_CADASTRAR_CONTATOS, novaContato);
                setExibirModal(true);
            } catch (err) {

            }
        }
    }

    //  Atualizar Contato
    useEffect(() => {
        async function obterContatos() {
            try {
                let { data } = await axios.get(API_URL_ATUALIZAR_CONTATOS + props.contato.id);
                setContato(data.name);
            } catch (err) {

            }
        }
        if (carregarContatos) {
            obterContatos();
            setcarregarContatos(false);
        }
    }, [carregarContatos, props ]);

    //  Atualizar Contato
    async function atualizar(event) {
        setFormValidado2(true);
        if (event.currentTarget.checkValidity() === true) {
            try {
                const contatoAtualizadar = new Contatos(null, contato, false);
                await axios.put(API_URL_ATUALIZAR_CONTATOS + props.contato.id, contatoAtualizadar);
                setExibirModal2(true);
            } catch (err) {
                setExibirModal2(false);
            }
        }
    }

    //  Atualizar Contato
    function handleTxtAtualizar(event) {
        setContato(event.target.value);
    }
    function handleFecharModal2() {
        setExibirModal2(false);
    }
    function handleAbrirModal() {
        setExibirModal2(true);
    }
     // Adicionar Contato
    function mostrarModal() {
        setExibirModal(true);
    }
    function handleTxtContato(event) {
        setContatos(event.target.value);
    }
    function handleFecharModal() {
        setExibirModal(false);
    }

    // function mostrarImagem(foto){
    //   if(foto){
    //       return(   );
    //   }else
    //       return( <img src={Images} id="fotosAside"/>);
    // }

    //{mostrarImagem(contato.foto ? contato.foto : false)}
    // <img src={ `http://localhost:3001/images/%3C%=%20foto[i].imagem%20%%3E${contato.foto}` } alt="fotoContato">{contato.foto}</img>
    //  <img src={ `http://localhost:3001/chat-contatos/images/%3C%=%20foto[i].imagem%20%%3E` } ></img> As horas dos contatos não estão aparecendo.
    

    var date = new Date();
    var horaTime = date.getHours() + ":" + date.getMinutes();
    
    //var contato =  props.contatos.find((e) => e.id == (contato.id));

    return (
      props.contatos.map(contato =>    
            <div key={contato.id} data-testid="contatos">
                <div>
                    <div className="row mt-1">

                        {contato.foto ? <img className="Item1 col" id="fotosAside" src={API_URL + '/images/' + contato.foto} />
                            : <img className="Item1 col" src={Images} id="fotosAside"/>}

                        <h1 id="contatosAside" className="text-center" className="col-6 ml-3 align-self-center">
                            {contato.name}</h1>
                        <h1 id="timeAside" className="col align-self-end">
                            {contato.time ? contato.time : horaTime}</h1>
                        <hr id="linhaAside1" className="row mt-1 " />
                        <div className="row">
                            <h1 className="col align-self-end ">
                                <RemoverContato contato={contato} recarregarContatos={props.recarregarContatos} />
                            </h1>
                            <h1 id="addContatosAside" className="col p-3" onClick={mostrarModal} >
                                <FontAwesomeIcon icon={faPlus} className="fa-lm" /></h1>
                            
                             {/*<h1 id="addContatosAside" className="col p-3" onClick={handleAbrirModal} >
                                <FontAwesomeIcon icon={faEdit} className="fa-lm" /></h1>*/}
                               
                            {/*<h1 className="col align-self-end">
                                <AtualizarContato contato={contato} recarregarContatos={props.recarregarContatos} />
                            </h1>*/}
                            <A id="addContatosAside" className="col p-3" onClick={handleAbrirModal} href={contato.id}>
                                <FontAwesomeIcon icon={faEdit}/>
                             </A>
    
                        </div>
                        <hr id="linhaAside2" className="row mt-1 " />
                    </div>

                    {/*Adicionar Contato*/}
                    <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Adicionar Contato</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control
                                type="text"
                                placeholder="Digite o Contato"
                                minLength="5"
                                maxLength="100"
                                required
                                value={contatos}
                                onChange={handleTxtContato}
                                data-testid="txt-tarefa" />
                            <Form.Control.Feedback type="invalid">
                                A tarefa deve conter ao menos 5 caracteres.
                             </Form.Control.Feedback>
                        </Modal.Body>
                        <Modal.Footer>
                            <Form onSubmit={cadastrar} validated={formValidado}
                                noValidate >
                                <Button
                                    variant="success"
                                    type="submit"
                                    data-testid="btn-cadastrar"
                                >
                                    Adicionar
                                </Button>
                            </Form>
                            &nbsp;
              <Button onClick={handleFecharModal} className="btn btn-light">Voltar</Button>
                        </Modal.Footer>
                    </Modal>
                    
             
                </div>

                   {/*Atualizar Contato   
            <span>
            <h1 id="ItemAtualizarCont" className="btn-sm" onClick={handleAbrirModal}
                data-testid="btn-abrir-modal">
                <FontAwesomeIcon icon={faEdit} className="fa-lm" />
            </h1>*/}
            <Modal show={exibirModal2} onHide={handleFecharModal2} data-testid="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Atualizar Contato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control 
                        type="text"
                        placeholder="Digite o Contato"
                        minLength="5"
                        maxLength="100"
                        required
                        value={contato.name}
                        onChange={handleTxtAtualizar}
                        data-testid="txt-tarefa" />
                    <Form.Control.Feedback type="invalid">
                        A tarefa deve conter ao menos 5 caracteres.
                    </Form.Control.Feedback>
                </Modal.Body>
                <Modal.Footer>
                    <Form onSubmit={atualizar} validated={formValidado2} noValidate
                         >
                        <Button
                            variant="primary"
                            type="submit"
                            data-testid="btn-cadastrar"
                        >
                            Atualizar
                        </Button>
                  </Form>
              &nbsp;
            <Button onClick={handleFecharModal2} className="btn btn-light">Voltar</Button>
                </Modal.Footer>
            </Modal>
         {/*</span>*/}
            </div>

        )
    )    
}

export default Aside;

