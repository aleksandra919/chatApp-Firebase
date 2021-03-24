import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    type: "host",
    text: "Hello, how can I help you?",
    createdAt: "9997-12-31T23:59:59Z",
  },
  {
    id: "2",
    type: "client",
    text: "I want to fix..",
    createdAt: "9998-12-31T23:59:59Z",
  },
];

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, type, id) {
        return {
          payload: {
            id,
            text,
            type,
            createdAt: "9999-12-31T23:59:59Z",
          },
        };
      },
    },
    updateMessages(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addMessage, updateMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
