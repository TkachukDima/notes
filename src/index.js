import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app.js';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reduser} from './store/redusers';
import { loadState, saveState} from './store/localStorage';

import {throttle} from './store/throttle';

const persistedState = loadState();
const store = createStore(reduser, persistedState);

store.subscribe(() => {
   localStorage.setItem('state', JSON.stringify(store.getState()));
 });

ReactDOM.render( <Provider store={store}>
                    <App />
                 </Provider> , document.getElementById('root'));

