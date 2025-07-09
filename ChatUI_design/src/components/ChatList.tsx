import React, { useEffect, useState } from 'react';
import './ChatList.css';
import localUsers from '../data/users.json';
import { FaCheckDouble } from 'react-icons/fa';

type User = {
  id: number;
  username: string;
  profileImage: string;
  read?: boolean; 
};


type Group = {
  id: number;
  name: string;
};

const ChatList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const usersWithStatus = localUsers.map(user => ({
      ...user,
      read: Math.random() > 0.5 // 50% chance of being read
    }));
    setUsers(usersWithStatus);
    fetch('https://mock-test.worthycodes.com/api/chatSystem/groups/list')
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch(console.error);
  }, []);

  const filteredUsers = users.filter((u) =>
    (u.username ?? '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-list">
    <input
        type="text"
        placeholder="Search Contact"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />

    <div className="scroll-area">
        <div className="user-section">
        {filteredUsers.map((user) => (
            <div className="chat-user compact" key={user.id}>
            <img src={user.profileImage} alt={user.username} className="avatar" />
            <div className="user-details-row">
              <div className="user-name">{user.username}</div>
              <FaCheckDouble
                className="read-icon"
                style={{ color: user.read ? '#4fc3f7' : '#ccc' }}
              />
            </div>
            </div>
        ))}
        </div>

        <div className="group-section">
          <h4>Groups</h4>
          {groups.map((group, index) => (
            <div key={group.id} className="group-item">
              <div className={`group-icon color-${index % 6}`}>
                {group.name.charAt(0).toUpperCase()}
              </div>
              <span>{group.name}</span>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default ChatList;