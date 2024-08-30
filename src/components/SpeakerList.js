import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SpeakerList.css';

const speakers = [
  { id: 1, name: 'Eleanor Pena', position: 'President of Sales', company: 'XYZ Organisation' },
  { id: 2, name: 'Esther Howard', position: 'Marketing Coordinator', company: 'XYZ Organisation' },
  { id: 3, name: 'Albert Flores', position: 'Nursing Assistant', company: 'XYZ Organisation' },
  { id: 4, name: 'John Doe', position: 'Marketing Head', company: 'XYZ Organisation' },
  { id: 5, name: 'Savannah Nguyen', position: 'Web Designer', company: 'XYZ Organisation' },
  { id: 6, name: 'Leslie Alexander', position: 'Marketing Head', company: 'XYZ Organisation' },
  { id: 7, name: 'Jonathan', position: 'Team Management Head', company: 'XYZ Organisation' },
  { id: 8, name: 'John Doe', position: 'Marketing Head', company: 'XYZ Organisation' },
];

const SpeakerList = ({ searchTerm, onToggleSelection, selectedSpeakers }) => {
  const filteredSpeakers = speakers.filter(speaker =>
    speaker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="speaker-list">
      {filteredSpeakers.map(speaker => (
        <div
          key={speaker.id}
          className={`speaker-item ${selectedSpeakers.includes(speaker) ? 'selected' : ''}`}
          onClick={() => onToggleSelection(speaker)}
        >
          <div className="speaker-info">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="3x"
              className="profile-icon"
            />
            <div className="speaker-details">
              <h4>{speaker.name}</h4>
              <p className="speaker-position">{speaker.position} <span className="separator"> </span>
              {speaker.company}</p>
              <button className="edit-btn">
                <FontAwesomeIcon icon={faEdit} className="edit-icon" /> Edit Speaker
              </button>
            </div>
          </div>
          <input
            type="checkbox"
            className="select-speaker"
            checked={selectedSpeakers.includes(speaker)}
            readOnly
          />
        </div>
      ))}
    </div>
  );
};

export default SpeakerList;
