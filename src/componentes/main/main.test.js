import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../main/index';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});