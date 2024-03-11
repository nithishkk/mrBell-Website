import React ,{useState}from 'react';
import Logo from "../Images/unnamed.webp"
import NavBar from "./NavBar"

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  return (
   <>
      <div className={`wrapper ${isSidebarOpen ? 'open' : ''}`}>
        <div className="header">
          <img src={Logo} alt="Logo" className='Logo' />
          <span>Mr Bell</span>
        </div>
        <div className="content">
          {/* Your repeated content goes here */}
          {/* ... */}
          <p>Your content goes here. Add more text and elements...</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
       <p>whats app</p>
       <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
       <p>whats app</p>

       <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
       <p>whats app</p>
       <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
       <p>whats app</p>
       <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
       <p>whats app</p>
       <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
         <p>Murth Chart</p>
       <p>whats app</p>
       
         

          
          {/* ... */}
        </div>
        <div className="footer">
          hh
        </div>
      </div>

      <NavBar onMenuClick={toggleSidebar} />

    </>
    
  );
}
