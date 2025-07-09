import React from 'react';
import { FaSearch, FaPhone, FaVideo, FaEllipsisV } from 'react-icons/fa';
import './ChatHeader.css';

const ChatHeader: React.FC = () => {
  return (
    <div className="chat-header">
      <div className="header-left">
        <img
          src="https://picsum.photos/id/91/500/500"
          alt="Jonathan"
          className="header-avatar"
        />
        <div className="header-info">
          <div className="header-name">Jonathan</div>
          <div className="header-role">Product Manager</div>
        </div>
      </div>
      <div className="header-actions">
        <FaSearch />
        <FaPhone />
        <FaVideo />
        <FaEllipsisV />
      </div>
    </div>
  );
};

export default ChatHeader;
