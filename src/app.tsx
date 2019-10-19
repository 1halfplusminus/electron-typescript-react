import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/root';
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDOM.render(
  <ReactHotAppContainer>
    <Root />
  </ReactHotAppContainer>,
  mainElement,
);
