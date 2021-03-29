import { configureStore } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";

export default configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
});
