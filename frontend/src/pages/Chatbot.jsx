import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m CAMPEX Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);

    // Simple bot replies
    setTimeout(() => {
      let reply = "🤔 I’m not sure. Try asking about clubs, events, or campus.";
      if (input.toLowerCase().includes("event"))
        reply = "🎉 The next big event is TechFest 2025, happening on Nov 15!";
      else if (input.toLowerCase().includes("club"))
        reply = "🏀 We have Coding, Robotics, Music, and Dance clubs!";
      else if (input.toLowerCase().includes("help"))
        reply = "💡 You can ask me about campus tours, clubs, or upcoming events.";

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <h2>💬 CAMPEX Enquiry Chatbot</h2>
      </header>

      <div className="chatbox">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
