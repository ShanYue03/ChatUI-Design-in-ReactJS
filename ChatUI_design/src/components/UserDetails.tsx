import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaUserPlus,
  FaCommentDots,
  FaVideo,
  FaMapMarkerAlt,
  FaUsers,
} from 'react-icons/fa';
import './UserDetails.css';

type User = {
  id: number;
  name?: string;
  position?: string;
  location?: string;
  email?: string;
  phone?: string;
  profileImage?: string;
};

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get('https://mock-test.worthycodes.com/api/chatSystem/user/3')
      .then((res) => setUser(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="user-details">
      <div className="header-image">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" // similar to your example
          alt="bg"
        />
      </div>

      {user && (
        <div className="card-content">
          <img
            src={user.profileImage || 'https://randomuser.me/api/portraits/men/76.jpg'}
            alt="profile"
            className="profile-pic"
          />
          <h2>{user.name}</h2>
          <p className="user-role">{user.position}</p>

          <div className="user-location">
            <FaMapMarkerAlt className="icon" />
            {user.location}
          </div>

          <div className="user-buttons">
            <button className="circle-btn gray" title="Add Contact">
              <FaUserPlus />
            </button>
            <button className="circle-btn purple" title="Message">
              <FaCommentDots />
            </button>
            <button className="circle-btn pink" title="Video Call">
              <FaVideo />
            </button>
          </div>

          <div className="user-info">
            <h4>User Information</h4>
            <p>Phone</p>
            <p className="value">{user.phone}</p>
            <p>Email</p>
            <p className="value">Kevin03@gmail.com</p>
          </div>

          <div className="group-participants">
            <h4>
              Group Participants <FaUsers />
            </h4>
            <div className="group-tag">
              <span className="tag-icon">M</span> Marketing
            </div>
            <div className="group-avatars">
              <img src="https://i.pravatar.cc/30?img=1" alt="1" />
              <img src="https://i.pravatar.cc/30?img=2" alt="2" />
              <span className="more">+2</span>
            </div>
          </div>

          <div className="media-section">
            <h4>Media</h4>
            <div className="media-gallery">
              <img src="https://picsum.photos/id/1035/80/80" alt="media1" />
              <img src="https://picsum.photos/id/1027/80/80" alt="media2" />
              <img src="https://picsum.photos/id/1025/80/80" alt="media3" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
