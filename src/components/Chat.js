// Chat.jsx
import React from 'react';
import '../sytles/Chat.css'
import ChatMessage from "./ChatMessage";

const Chat = ({ messages }) => {
    return (
        <div className="chat-container">
            {messages.map((message) => (
                <ChatMessage
                    message={message.content}
                    belongsMe={message.belongsMe}
                />
            ))}
        </div>
    );
};

export default Chat;