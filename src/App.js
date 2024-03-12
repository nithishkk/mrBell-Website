import React, { useState, useEffect } from 'react';
import './App.scss';
import Title from "./Images/MC-logo-final_MC-logo-horizontal.svg";
import Name from "./Images/WhatsApp Image 2024-03-11 at 8.25.45 PM.jpeg";
import NameTitle from "./Images/Yellow Did you know interesting fact Instagram post.png"

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
    
      <div className="left-side">
        <h1>Murthy Chat</h1>
      {/* <img src={Title} alt="Title"  className='img_logo'/> */}

        <p className='Chart_oom'>Chat Room</p>

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
      <h1 className='Label_Name'>Village Radio</h1>
      <img src={NameTitle} alt="name" className='name_img'/>

        {/* <img src={Title} alt="Title"  className='img_logo'/> */}
        {/* <p className='LogoName'>Document village life</p>
        <p className='Contant'>Preserve unique Culture, Tradition, Customs, Events of your village in Murthy Chat.</p>  
        <img src={Name} alt="name" className='name_img'/> */}
      </div>

     {/* <div className='footer'>
      jjj
     </div> */}
     
     
    </div>
  );
}

export default App;
