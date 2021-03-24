import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addMessage } from "./messagesSlice";

const AddMessage = (props) => {
  const { userType } = props;
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(" ");

    const message = {
      id: nanoid(),
      type: userType,
      text: text,
      createdAt: "9998-12-31T23:59:59Z",
    };

    dispatch(addMessage(text, userType, message.id));
  };

  return (
    <div className="add-message clearfix">
      <form className="add-message clearfix" onSubmit={handleSubmit}>
        <textarea
          name="message-to-send"
          id="message-to-send"
          placeholder="Type your message..."
          rows="3"
          onChange={handleChange}
        >
          {text}
        </textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default AddMessage;
