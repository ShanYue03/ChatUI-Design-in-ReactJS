import React from 'react';
import { FaHome, FaEnvelope, FaCalendarAlt, FaUsersCog, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="icon-wrapper">
        <FaHome />
      </div>
      <div className="icon-wrapper">
        <FaEnvelope />
      </div>
      <div className="icon-wrapper">
        <FaCalendarAlt />
      </div>
      <div className="icon-wrapper">
        <FaUsersCog />
      </div>
      <div className="icon-wrapper">
        <FaCog />
      </div>
    </div>
  );
};

export default Sidebar;