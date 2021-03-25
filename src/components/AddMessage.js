import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addMessage } from "./messagesSlice";

import { useFirebase } from "react-redux-firebase";

const AddMessage = (props) => {
  const { userType } = props;
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const firebase = useFirebase();

  var db = firebase.firestore();

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
    };

    dispatch(addMessage(text, userType, message));
  };

  const addMes = () => {
    console.log("add mes");
    return firebase.push("chat", {
      id: "3",
      type: "client",
      text: "bla bla",
      createdAt: "9998-12-31T23:59:59Z",
    });
  };

  const addMes2 = () => {
    db.collection("chat")
      .add({
        id: "3",
        type: "client",
        text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "9998-12-31T23:59:59Z",
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
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
      <button onClick={addMes}>add</button>
      <button onClick={addMes2}>add2</button>
    </div>
  );
};

export default AddMessage;
