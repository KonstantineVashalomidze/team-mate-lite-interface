import React, { useState } from 'react';
import '../sytles/ChatInputField.css'



const ChatInputField = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        // Logic to send message
        console.log("Sending message:", message);
        setMessage('');
    };

    return (
        <div className="chat-input-area-container">
            <textarea placeholder="Type your message here..." value={message} onChange={handleMessageChange}>

            </textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
);
};

export default ChatInputField;
