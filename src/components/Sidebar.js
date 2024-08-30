import React, { useState } from 'react';
import SpeakerList from './SpeakerList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sidebar.css';

const Sidebar = ({ handleClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Toggle speaker selection
  const toggleSpeakerSelection = (speaker) => {
    if (selectedSpeakers.includes(speaker)) {
      setSelectedSpeakers(selectedSpeakers.filter((s) => s !== speaker));
    } else {
      setSelectedSpeakers([...selectedSpeakers, speaker]);
    }
  };

  // Check if the Add button should be active
  const isAddButtonActive = selectedSpeakers.length > 0;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Add Speaker</h2>
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>
      <div className="sidebar-search">
      <SearchIcon fontSize="small" /> 
        <input
          type="text"
          placeholder="        Search..."
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
        <button className={`action-btn add-btn ${isAddButtonActive ? 'active' : ''}`} disabled={!isAddButtonActive}>
          Add
        </button>
        <button className="action-btn cancel-btn">Cancel</button>
        <button className="create-btn">Create a speaker</button>
      </div>
    </div>
  );
};

export default Sidebar;
