import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

