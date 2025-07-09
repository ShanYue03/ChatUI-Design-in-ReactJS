import React from 'react';
import './MessageBubble.css';

type Props = {
  fromUser: boolean;
  name: string;
  avatar: string;
  message: string;
};

const MessageBubble: React.FC<Props> = ({ fromUser, name, avatar, message }) => {
  return (
    <div className={`message-row ${fromUser ? 'sent' : 'received'}`}>
      <img src={avatar} alt="avatar" className="bubble-avatar" />
      <div className="bubble-content">
        <div className="bubble-name">{name}</div>
        <div className="bubble-text">{message}</div>
      </div>
    </div>
  );
};

export default MessageBubble;