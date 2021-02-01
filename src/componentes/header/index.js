import React from 'react';
import './header.css';
//import { makeStyles } from '@material-ui/styles';
//import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
//import AdicionarContatos from '../aside/adicionar-contatos';

function Header() {

  //const classes = useStyles();

  //const {contatos} = props;

  //const {carregarContatos} = props;  

  return (

    <div className="row">
      <div id="foto1Header" className="Item1 col-xs align-self-center"></div>
      <div id="foto2Header" className="Item2 col-xs align-self-center offset-sm-3"></div>
      <h1 id="nomeHeader" className="Item3 col align-self-center">John Doe</h1>
    </div>
  );
}

export default Header;