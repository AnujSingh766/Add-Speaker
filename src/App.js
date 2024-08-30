import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddSpeaker from './components/AddSpeaker';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddSpeaker />} />
        <Route path="/add-speaker" element = {<Sidebar/>}/>
      </Routes>
    </Router>
  );
};

export default App;