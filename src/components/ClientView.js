import App from "./App";
import React from "react";
import hostAvatar from "../assets//hostAvatar.jpg";

const HostView = () => {
  return <App userType="client" chatWith="host" chatWithImg={hostAvatar} />;
};

export default HostView;
