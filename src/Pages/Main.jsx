import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../Images/MC-logo-final_MC-logo-horizontal.svg';
import Name from '../Images/WhatsApp Image 2024-03-11 at 8.25.45 PM.jpeg';
import NameTitle from '../Images/Yellow Did you know interesting fact Instagram post.png';

function Main() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
 <div className="container">
  {/* <div className='Name_Murthy'>
      <h1>Murthy Chat</h1>
      <p>Chat Room</p>
    </div> */}
  <div className="left-side">
    <div className='Murthy_Chart'>
      <h1>Murthy Chat</h1>
      <p>Chat Room</p>
    </div>
    <textarea
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search..."
      className="search-input"
      rows={4}
      cols={50}
    />
    <p className="SearchName">{searchTerm}</p>
  </div>

  <div className="right-side">
    <h1 className="Label_Name">Village Radio</h1>
    <img src={NameTitle} alt="name" className="name_img" />
    <div className="Links">
      <Link to="/terms-and-condition">Terms and Condition</Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/community-standards">Community Standards</Link>
    </div>
  </div>
</div>

  
  );
}

export default Main;
