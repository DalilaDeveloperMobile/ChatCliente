import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './chat';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chat />, div);
  ReactDOM.unmountComponentAtNode(div);
});