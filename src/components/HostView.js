import App from "./App";
import React from "react";
import clientAvatar from "../assets//clientAvatar.jpg";

const HostView = () => {
  return <App userType="host" chatWith="Client" chatWithImg={clientAvatar} />;
};

export default HostView;
