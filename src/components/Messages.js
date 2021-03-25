import React, { useEffect, useRef } from "react";

const Messages = (props) => {
  const { userType, messages } = props;
  const appHistory = useRef(null);

  const renderMessage = (message, user) => {
    let userTypeClass =
      (message.type === "host" && user === "host") ||
      (message.type === "client" && user === "client")
        ? "message other-message float-right"
        : "message my-message";

    let textAlign =
      (message.type === "host" && user === "host") ||
      (message.type === "client" && user === "client")
        ? "message-data align-right"
        : "message-data";

    return (
      <li className="clearfix" key={message.id}>
        <div className={textAlign}>
          <i className="fa fa-circle circle"></i>
          <span className="message-data-name">{message.type}</span>
          <span className="message-data-time">{message.createdAt}</span> &nbsp;
          &nbsp;
        </div>
        <div className={userTypeClass}>{message.text}</div>
      </li>
    );
  };

  const scrollToBottom = () => {
    const scrollHeight = appHistory.current.scrollHeight;
    const height = appHistory.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    appHistory.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  useEffect(() => {
    scrollToBottom();
  });

  messages
    .slice()
    .sort((a, b) =>
      a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
    );

  return (
    <div className="app-history" ref={appHistory}>
      <ul>{messages.map((m) => renderMessage(m, userType))}</ul>
    </div>
  );
};

export default Messages;
