import React from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import UserDetails from './components/UserDetails';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <ChatList />
      <ChatWindow />
      <UserDetails />
    </div>
  );
};

export default App;
