// ChatMessage.jsx
import React from 'react';
import '../sytles/ChatMessage.css';



const ChatMessage = ({ message, belongsMe }) => {
    return (
        <div className={`chat-message-container-${belongsMe ? "do-belong" : "dont-belong"}`}>
            {!belongsMe && (
                <div className="message-header">
                    <img src={message.senderImage} alt="Sender" className="sender-image" />
                    <span className="display-name">{message.displayName}</span>
                </div>
            )}
            <div className="message-content">
                <p>{message.text}</p>
            </div>
        </div>
    );
};


export default ChatMessage;