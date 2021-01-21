import React from 'react';
import ReactDOM from 'react-dom';
import Aside from '../aside/index';

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Aside />, div);
  ReactDOM.unmountComponentAtNode(div);
});