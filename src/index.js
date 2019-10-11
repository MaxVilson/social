import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const reRenderDom = (state) => {
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
};

reRenderDom(store.getState());

store.observer(reRenderDom);

serviceWorker.unregister();
