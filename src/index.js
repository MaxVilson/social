import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'

const reRenderDom = () => {
    
    ReactDOM.render(
        // Передаем всем нашим компонентам store 
        <Provider store={store}> 
            <App />
        </Provider>,
        document.getElementById('root')
    )
};

reRenderDom();

store.subscribe(() => { 
    reRenderDom();
});

serviceWorker.unregister();
