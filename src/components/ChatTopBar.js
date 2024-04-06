import React from 'react';
import '../sytles/ChatTopBar.css'


const ChatTopBar = ({ image, name, status }) => {
    return (
        <div className="chat-top-bar-container">
            <img src={image} alt="image" className="chat-top-bar-container-image"/>
            <span className="chat-top-bar-container-name">{name}</span>
            <span className="chat-top-bar-container-status">{status}</span>
            <button className="chat-top-bar-container-voice-call" >Voice</button>
            <button className="chat-top-bar-container-video-call" >Video</button>
        </div>
    );
};

export default ChatTopBar;