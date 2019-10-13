import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const reRenderDom = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

reRenderDom();

store.subscribe(() => { // Почему происходит вызов reRenderDom? 
    reRenderDom();
});

serviceWorker.unregister();
