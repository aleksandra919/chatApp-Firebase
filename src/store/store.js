import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "../components/messagesSlice";

export default configureStore({
  reducer: {
    messages: messagesReducer,
  },
});
