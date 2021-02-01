import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './main.css';

// Remover ainda não funciona
function RemoverMensagens(props) {

    const API_URL_REMOVER_MENSAGENS = 'http://localhost:3001/chat-mensagens/';

    const [exibirModal, setExibirModal] = useState(false);

    function handleAbrirModal(event) {
        event.preventDefault();
        setExibirModal(true);
    }

    function handleFecharModal() {
        setExibirModal(false);
    }

    async function handleRemoverMensagens(event) {
        try {
            await axios.delete(API_URL_REMOVER_MENSAGENS + props.mensagems.id);
            setExibirModal(false);
            props.recarregarMensagens(true);
        } catch (err) {
            setExibirModal(false);

        }
    }

    return (
        <span>
            <h1 id="ItemRemoverMsg" className="btn-sm" onClick={handleAbrirModal}
                data-testid="btn-abrir-modal">
                <FontAwesomeIcon icon={faTrashAlt} className="fa-lm" />
            </h1>
            <Modal show={exibirModal} onHide={handleFecharModal}
                data-testid="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Remover Mensagem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente remover a seguinte tarefa?
                 <br />
                    <strong>{props.mensagems.descricao}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={handleRemoverMensagens}
                        data-testid="btn-remover">
                        Sim
                 </Button>
                    <Button variant="light" onClick={handleFecharModal}>
                        Não
                 </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}

export default RemoverMensagens;