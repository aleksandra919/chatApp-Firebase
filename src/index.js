import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Main from './Main';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));

