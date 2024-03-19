import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../Images/MC-logo-bubble.svg';
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
     
    <div className="Title-container">
  <img src={Title} alt='Title' className='Title-img'/>  
  <Link to="/" className='Top-Name'>
    <h1>Murthy Chat</h1>
  </Link>
</div>

      <br/>
      <p className='Chat-Room'>Chat Room</p>
    </div>
    <div class="search-container">
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
  {/* <p className='Inc'>©2024 Kuchi Inc</p> */}

  </div>

  <div className="right-side">
    <p className="Label_Name">Village Radio</p>
    <img src={NameTitle} alt="name" className="name_img" />
    <div className="Links">
      <Link to="/terms-and-condition">Terms </Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/community-standards">Community Standards</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/">@2024 Kuchi Inc</Link>

      
    </div>
  </div>
</div>

  
  );
}

export default Main;
