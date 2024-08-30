import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeakerList from './SpeakerList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Toggle speaker selection
  const toggleSpeakerSelection = (speaker) => {
    setSelectedSpeakers((prevSelectedSpeakers) =>
      prevSelectedSpeakers.includes(speaker)
        ? prevSelectedSpeakers.filter((s) => s !== speaker)
        : [...prevSelectedSpeakers, speaker]
    );
  };

 
  const isAddButtonActive = selectedSpeakers.length > 0;

  const handleClose = () => {
    navigate('/'); // navigate to addSpeaker
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h5>Add Speaker</h5>
        <button
          className="close-btn"
          onClick={handleClose}
          aria-label="Close Sidebar"
        >
          ×
        </button>
      </div>
      <div className="sidebar-search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="sidebar-content">
        <SpeakerList
          searchTerm={searchTerm}
          onToggleSelection={toggleSpeakerSelection}
          selectedSpeakers={selectedSpeakers}
        />
      </div>
      <div className="sidebar-footer">
        <button
          className={`action-btn add-btn ${isAddButtonActive ? 'active' : ''}`}
          disabled={!isAddButtonActive}
        >
          Add
        </button>
        <button className="action-btn cancel-btn">Cancel</button>
        <button className="create-btn">Create a Speaker</button>
      </div>
    </div>
  );
};

export default Sidebar;
