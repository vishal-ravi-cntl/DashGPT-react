// App.js
import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [messages, setMessages] = useState([{ id: 1, sender: "bot", text: "Hello! How can I assist you today?" }]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() !== "") {
      const newMessage = { id: messages.length + 1, sender: "user", text: inputText };
      const lastBotMessage = messages[messages.length - 1].text; // Get the last bot message
      setMessages([...messages, { id: messages.length + 1, sender: "bot", text: lastBotMessage }]); // Repeat last bot message
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <div className={styles.messageContainer}>
          {messages.map((message) => (
            <div key={message.id} className={message.sender === "bot" ? styles.botMessage : styles.userMessage}>
              {message.text}
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className={styles.sendButton} onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
