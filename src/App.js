import React, { useState, useEffect } from 'react';
import './App.scss';
import Title from "./Images/MC-logo-final_MC-logo-horizontal.svg";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const initialText = "Any News Announecment Events Acticitues in your village now you can Update in Murthy Chat.";
  const [brokenWords, setBrokenWords] = useState([]);

  useEffect(() => {
    const words = initialText.split(/\s+/);
    setBrokenWords(words);
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
    
      <div className="left-side">
        <textarea
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-input"
          rows={4}
          cols={50}
        />
        <p className='SearchName'>{searchTerm}</p>
      </div>
      <div className="right-side">
        <img src={Title} alt="Title"  className='img_logo'/>
        <p className='LogoName'>Document village life</p>
        <p>Preserve unique Culture, Tradition, Customs, Events of your village in Murthy Chat.</p>   
      </div>

     
     
     
    </div>
  );
}

export default App;
