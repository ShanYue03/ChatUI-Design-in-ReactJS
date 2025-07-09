import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import MessageBubble from './MessageBubble';
import './ChatWindow.css';

type Message = {
  id: number;
  fromUser: number;
  toUser: number;
  message: string;
  time: string;
};

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios
      .get('https://mock-test.worthycodes.com/api/chatSystem/chatByUserId/3')
      .then((res) => setMessages(res.data))
      .catch(console.error);
  }, []);

  const getAvatar = (fromUser: number) => {
    if (fromUser === 5) {
        return 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d';
    }
    if (fromUser === 3) {
        return 'https://picsum.photos/id/91/500/500'; // Jonathan
    }
    return 'https://ui-avatars.com/api/?name=User&background=6c63ff&color=fff';
    };


  const getName = (fromUser: number) => {
    if (fromUser === 5) return 'You';
    if (fromUser === 3) return 'Jonathan';
    return 'User';
  };

  return (
    <div className="chat-window">
      <ChatHeader />
      <div className="chat-body">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            fromUser={msg.fromUser === 5}
            name={getName(msg.fromUser)}
            avatar={getAvatar(msg.fromUser)}
            message={msg.message}
          />
        ))}
      </div>
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
