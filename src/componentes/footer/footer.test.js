import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../footer/index';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});