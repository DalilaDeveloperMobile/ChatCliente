import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Modal } from 'react-bootstrap';
import Contatos from '../../../models/contatos.model';
//import AtualizarContato from '../aside/atualizar-contatos';
//import RemoverContato from '../aside/remover-contatos';
import axios from 'axios';

function AdicionarContatos(props) {


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

    return (
        <span>
        <h1 id="ItemAdicionarCont" className="btn-sm"
            onClick={mostrarModal}
            data-testid="btn-abrir-modal">
            <FontAwesomeIcon icon={faPlus} className="fa-lm" />
        </h1>
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
                <Modal.Form onSubmit={cadastrar} validated={formValidado}
                    noValidate >
                    <Button
                        variant="success"
                        type="submit"
                        data-testid="btn-cadastrar"
                    >
                        Adicionar
                    </Button>
                </Modal.Form>
        &nbsp;
       <Button onClick={handleFecharModal} className="btn btn-light">Voltar</Button>
            </Modal.Footer>
        </Modal>
        </span>
    )
}

export default AdicionarContatos;
