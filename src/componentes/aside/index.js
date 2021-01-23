import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Modal } from 'react-bootstrap';
import Contatos from '../../models/contatos.model';
import axios from 'axios';

function Aside(props) {

    const API_URL_CADASTRAR_CONTATOS = 'http://localhost:3001/chat-contatos';

    const [contatos, setContatos] = useState('');
    const [formValidado, setFormValidado] = useState(false);
    const [exibirModal, setExibirModal] = useState(false);


    //  const { setContatos } = props;

    //  const { contatos } = props;


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
        <div style={{
            fontSize: '300%',
            fontFamily: 'Helvetica Neue', fontStyle: 'normal', fontWeight: 'bold', color: ' #C4C4C4'
        }} onClick={mostrarModal} ><FontAwesomeIcon icon={faBars} className="fa-lm" /></div>,

        props.contatos.map(contato =>
            <div key={contato.id} data-testid="contatos">
                <div>
                    <div className="row mt-1">
                        <div className="Item1 col-xs align-self-center" style={{
                            margin: '5px', backgroundColor: ' #C4C4C4',
                            height: '6vh', width: '40px'
                        }}></div>

                        <h1 className="text-center" className="col-5 ml-3 align-self-center " style={{
                            fontSize: '90%',
                            fontFamily: ' Arial, Helvetica, sans-serif', fontStyle: 'normal', fontWeight: 'bold', color: '#000000'
                        }}>{contato.name}</h1>

                        <h1 className="col align-self-end" style={{
                            fontSize: '87%',
                            fontFamily: 'Helvetica Neue', fontStyle: 'normal', fontWeight: 'bold', color: ' #C4C4C4'
                        }} >{contato.time}</h1>

                        <h1 className="col align-self-end" style={{
                            fontSize: '110%',
                            fontFamily: 'Helvetica Neue', fontStyle: 'normal', fontWeight: 'bold', color: ' #C4C4C4'
                        }} onClick={mostrarModal} ><FontAwesomeIcon icon={faBars} className="fa-lm" /></h1>

                        <hr className="row mt-1 " style={{
                            width: '97%',
                            height: '1px', background: '#F7F7F7'
                        }} />

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
                                    Cadastrar
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

