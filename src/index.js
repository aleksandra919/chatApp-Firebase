import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Main from './Main';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));

