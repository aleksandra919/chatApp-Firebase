import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./style/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";

import store from "./store/store";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const fbConfig = {
  apiKey: "AIzaSyCbv3gNEkgWJgzi9lsr4NGU6-ohI-Cr2Yc",
  authDomain: "chatappstore-3e961.firebaseapp.com",
  databaseURL: "https://chatappstore-3e961.firebaseio.com",
  projectId: "chatappstore-3e961",
  storageBucket: "chatappstore-3e961.appspot.com",
  messagingSenderId: "665955700875",
  appId: "1:665955700875:web:96e7bfc621f9ba0750448e",
};

firebase.initializeApp(fbConfig);

firebase.firestore();

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Main />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
