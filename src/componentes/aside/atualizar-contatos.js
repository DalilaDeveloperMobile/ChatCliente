import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Contatos from '../../models/contatos.model';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

// Atualizar ainda não funciona
function AtualizarContato(props) {

    const API_URL_ATUALIZAR_CONTATOS = 'http://localhost:3001/chat-contatos/id';

    const [contatos, setContatos] = useState('');
    const [formValidado, setFormValidado] = useState(false);
    const [exibirModal, setExibirModal] = useState(false);
    const [carregarContato, setCarregarContato] = useState(true);


    //  Atualizar Contato
    useEffect(() => {
        async function obterContatos() {
            try {
                let { data } = await axios.get(API_URL_ATUALIZAR_CONTATOS + props.id);
                setContatos(data.name);
            } catch (err) {

            }
        }
        if (carregarContato) {
            obterContatos();
            setCarregarContato(false);
        }
    }, [carregarContato, props]);

    //  Atualizar Contato
    async function atualizar(event) {
        setFormValidado(true);
        if (event.currentTarget.checkValidity() === true) {
            try {
                const contatoAtualizadar = new Contatos(null, contatos, false);
                await axios.put(API_URL_ATUALIZAR_CONTATOS + props.id, contatoAtualizadar);
                setExibirModal(true);
            } catch (err) {

            }
        }
    }

    function handleTxtAtualizar(event) {
        setContatos(event.target.value);
    }

    function handleFecharModal() {
        setExibirModal(false);
    }

    function handleAbrirModal() {
        setExibirModal(true);
    }

    return (
        <span>
            <h1 style={{
                fontSize: '50%',
                fontFamily: 'Helvetica Neue', fontStyle: 'normal', fontWeight: 'bold', color: ' #C4C4C4'
            }} className="btn-sm" onClick={handleAbrirModal}
                data-testid="btn-abrir-modal">
                <FontAwesomeIcon icon={faEdit} className="fa-lm" />
            </h1>
            <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
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
                        value={contatos}
                        onChange={handleTxtAtualizar}
                        data-testid="txt-tarefa" />
                    <Form.Control.Feedback type="invalid">
                        A tarefa deve conter ao menos 5 caracteres.
     </Form.Control.Feedback>
                </Modal.Body>
                <Modal.Footer>
                    <Form onSubmit={atualizar} validated={formValidado}
                        noValidate >

                        <Button
                            variant="primary"
                            type="submit"
                            data-testid="btn-cadastrar"
                        >
                            Atualizar
                        </Button>
                  </Form>
        &nbsp;
<Button onClick={handleFecharModal} className="btn btn-light">Voltar</Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}

export default AtualizarContato;