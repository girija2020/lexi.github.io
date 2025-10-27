// ChatbotCss.tsx
import React, { useState } from "react";
// import styles from "./Chatbot.css"; // CSS module
import styles from "./Chatbot.module.css"

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatbotCss: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const res = await fetch("https://backend-227780646387.europe-west1.run.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "…" },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: failed to get reply." },
      ]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>Lakshmi's AI Assistant</h3>
        </div>

        <div className={styles.messages}>
          {messages.length === 0 && <div className={styles.empty}>Ask anything about Lakshmi Girija Dhulipati :)</div>}
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? styles.userMsg : styles.botMsg}
              style={{fontSize: "18px"}}

            >
              <strong className={styles.role}>
                {m.role === "user" ? "You:" : "Lakshmi's AI asst:"}
              </strong>
              {m.role === "user" ? (
                  <strong style={{ fontSize: "18px"}}>{m.content}</strong>
                ) : (
                  m.content
                )}
            </div>
          ))}
        </div>

        <div className={styles.inputRow}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className={styles.input}
            placeholder="Type a message..."></input>
            <button onClick={sendMessage} className={styles.button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotCss;
