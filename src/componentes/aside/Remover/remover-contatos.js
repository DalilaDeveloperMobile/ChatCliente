import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function RemoverContato(props) {

    const API_URL_REMOVER_CONTATO = 'http://localhost:3001/chat-contatos/';

    const [exibirModal, setExibirModal] = useState(false);


    function handleAbrirModal(event) {
        event.preventDefault();
        setExibirModal(true);
    }

    function handleFecharModal() {
        setExibirModal(false);
    }


    async function handleRemoverContato() {
        try {
            await axios.delete(API_URL_REMOVER_CONTATO + props.contato.id);
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
                    <strong>{props.contato.name}</strong>
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

//RemoverContato.propTypes = {
//    contato: PropTypes.object.isRequired,
//    recarregarContatos: PropTypes.func.isRequired
//}

export default RemoverContato;