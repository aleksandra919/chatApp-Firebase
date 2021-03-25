import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    type: "host",
    text: "Hello, how can I help you?",
    createdAt: "3/25/2021, 11:37:29 AM",
  },
  {
    id: "2",
    type: "client",
    text: "I want to fix..",
    createdAt: "3/25/2021, 11:38:39 AM",
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
      prepare(text, type, message) {
        return {
          payload: {
            id: message.id,
            text,
            type,
            createdAt: new Date().toLocaleString(),
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
