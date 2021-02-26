import React from 'react';
import './header.css';
import Imagem1 from '../../images/1w.png';
import Imagem2 from '../../images/232.png';
//import { makeStyles } from '@material-ui/styles';
//import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
//import AdicionarContatos from '../../componentes/aside/Adicionar/adicionar-contatos';

function Header() {

 

  //const classes = useStyles();

  //const {contatos} = props;

  //const {carregarContatos} = props;  

 

  return (

    <div className="row">
      <img src={Imagem2} id="foto1Header" className="Item1 col-xs align-self-center"/>
      <img src={Imagem1} id="foto2Header" className="Item2 col-xs align-self-center offset-sm-3"/>
      <h1 id="nomeHeader" className="Item3 col align-self-center">John Doe</h1>
    </div>
  );
}

export default Header;