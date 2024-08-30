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

const SpeakerList = ({ searchTerm }) => {
  const filteredSpeakers = speakers.filter(speaker =>
    speaker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="speaker-list">
      {filteredSpeakers.map(speaker => (
        <div key={speaker.id} className="speaker-item">
          <div className="speaker-info">
          <FontAwesomeIcon
                    icon={faUserCircle}
                    size="2x" className="profile-icon" />
            <div className="speaker-details">
              <h4>{speaker.name}</h4>
              <p>{speaker.position} | {speaker.company}</p>
              <button className="edit-btn"> <FontAwesomeIcon icon={faEdit}  className='edit-icon'/> Edit Speaker</button>
            </div>
          </div>
          <input type="checkbox" className="select-speaker" />
        </div>
      ))}
    </div>
  );
};

export default SpeakerList;
