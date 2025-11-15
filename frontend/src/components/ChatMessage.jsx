import React from "react";
import "./Chatbot.css";

function ChatMessage({ sender, text }) {
  return (
    <div className={`chat-message ${sender}`}>
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
