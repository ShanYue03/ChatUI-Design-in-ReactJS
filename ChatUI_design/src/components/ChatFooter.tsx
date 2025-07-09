import React from 'react';
import { FaBold, FaPaperclip, FaSmile, FaPaperPlane } from 'react-icons/fa';
import './ChatFooter.css';

const ChatFooter: React.FC = () => {
  return (
    <div className="chat-footer">
      <input type="text" placeholder="Type a message..." />
      <FaBold className="footer-icon" />
      <FaPaperclip className="footer-icon" />
      <FaSmile className="footer-icon" />
      <button className="send-btn">
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatFooter;
