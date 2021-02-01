import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Modal } from 'react-bootstrap';
import Contatos from '../../models/contatos.model';
import AtualizarContato from '../aside/atualizar-contatos';
import RemoverContato from '../aside/remover-contatos';
import axios from 'axios';
import './aside.css';

function Aside(props) {

    const API_URL_CADASTRAR_CONTATOS = 'http://localhost:3001/chat-contatos';

    const [contatos, setContatos] = useState('');
    const [formValidado, setFormValidado] = useState(false);
    const [exibirModal, setExibirModal] = useState(false);

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

    function mostrarModal() {
        setExibirModal(true);
    }


    function handleTxtContato(event) {
        setContatos(event.target.value);
    }


    function handleFecharModal() {
        setExibirModal(false);
    }

    // As horas dos contatos não estão aparecendo.
    return (
        props.contatos.map(contato =>
            <div key={contato.id} data-testid="contatos">
                <div>
                    <div className="row mt-1">
                        <div id="fotosAside" className="Item1 col-xs align-self-center">
                        </div>
                        <h1 id="contatosAside" className="text-center" className="col-6 ml-3 align-self-center">
                            {contato.name}</h1>
                        <h1 id="timeAside" className="col align-self-end">
                            {contato.time}</h1>
                        <hr id="linhaAside1" className="row mt-1 " />
                        <div className="row">
                            <h1 className="col align-self-end ">
                                <RemoverContato contatos={contatos} carregarContatos={props.carregarContatos} />
                            </h1>
                            <h1 className="col align-self-end">
                                <AtualizarContato contatos={contatos} carregarContato={props.carregarContato} />
                            </h1>
                            <h1 id="addContatosAside" className="col p-3" onClick={mostrarModal} >
                                <FontAwesomeIcon icon={faPlus} className="fa-lm" /></h1>
                        </div>
                        <hr id="linhaAside2" className="row mt-1 " />
                    </div>

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
            </div>
        )
    )
}

export default Aside;

