import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../main.css';


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

    async function handleRemoverMensagens() {
        window.location.reload();
        try {
            await axios.delete(API_URL_REMOVER_MENSAGENS + props.mensagem.id);
            setExibirModal(false);
            props.recarregarMensagens(true);
        } catch (err) {
            setExibirModal(false);

        }
    }

    return (
        <span>
            <h1 onClick={handleAbrirModal}
                data-testid="btn-abrir-modal">
                    Apagar Mensagem
            </h1>
            <Modal show={exibirModal} onHide={handleFecharModal}
                data-testid="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Remover Mensagem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente remover a seguinte Mensagem?
                 <br />
                    <strong>{props.mensagem.descricao}</strong>
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

//RemoverMensagens.propTypes = {
//    mensagem: PropTypes.object.isRequired,
//    recarregarMensagens: PropTypes.func.isRequired
//}

export default RemoverMensagens;

