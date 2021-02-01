import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// Remover ainda não funciona
function RemoverContato(props) {

    const API_URL_REMOVER_CONTANTO = 'http://localhost:3001/chat-contatos/';

    const [exibirModal, setExibirModal] = useState(false);


    function handleAbrirModal(event) {
        event.preventDefault();
        setExibirModal(true);
    }

    function handleFecharModal() {
        setExibirModal(false);
    }


    async function handleRemoverContato(event) {
        try {
            await axios.delete(API_URL_REMOVER_CONTANTO + props.contato.id);
            setExibirModal(false);
            props.recarregarContatos(true);
        } catch (err) {
            setExibirModal(false);

        }
    }

    return (
        <span>
            <h1 id="ItemRemoverCont" className="btn-sm"
                onClick={handleAbrirModal}
                data-testid="btn-abrir-modal">
                <FontAwesomeIcon icon={faTrashAlt} className="fa-lm" />
            </h1>
            <Modal show={exibirModal} onHide={handleFecharModal}
                data-testid="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Remover Contato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente remover o seguinte contato?
                 <br />
                    <strong>{props.contatos.name}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={handleRemoverContato}
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

export default RemoverContato;