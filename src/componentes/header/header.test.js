import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/index';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});