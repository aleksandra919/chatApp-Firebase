import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useFirebase } from "react-redux-firebase";

const AddMessage = (props) => {
  const { userType } = props;
  const [text, setText] = useState("");

  const firebase = useFirebase();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(" ");
    return firebase.push("chat", {
      id: nanoid(),
      text: text,
      type: userType,
      createdAt: new Date().toLocaleString(),
    });
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
          value={text}
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default AddMessage;
