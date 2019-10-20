import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/root';
import { configureStore } from './store';

const store = configureStore();
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDOM.render(
  <ReactHotAppContainer>
    <Root store={store} />
  </ReactHotAppContainer>,
  mainElement,
);
