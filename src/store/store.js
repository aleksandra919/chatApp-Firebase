import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "../components/messagesSlice";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default configureStore({
  reducer: {
    messages: messagesReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
});
