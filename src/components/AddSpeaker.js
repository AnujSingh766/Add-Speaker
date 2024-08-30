import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddSpeaker.css';


const AddSpeaker = () => {
  const navigate = useNavigate();

  const handleAddSpeakerClick = () => {
    navigate('/add-speaker'); // Navigate to the Sidebar directly
  };


  return (
    <div className="page-wrapper">
    <div className="container">
      <div className="add-speaker-section">
        <p>Add speaker</p>
        <button className="add-speaker-btn" onClick={handleAddSpeakerClick}>Add Speaker</button>
      </div>
    </div>

    </div>
  );
};

export default AddSpeaker;
