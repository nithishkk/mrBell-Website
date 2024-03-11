import React,{useState} from 'react'
import Menu from "../Images/menu_FILL0_wght400_GRAD0_opsz24.svg"
import Title from "../Images/MC-logo-final_MC-logo-horizontal.svg"


export default function NavBar() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
   const onMenuClick = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
 
   return (
     <>
       <div className="navbar">
         <img src={Menu} alt="Menu" className="Menu" onClick={onMenuClick} />
         Preserve unique Culture
         
         {/* <img src={Title} alt="Title" style={{width:"150px",height:"50px"}} /> */}

         <div className="Nav_Content">
           <p>Introducing Murthy Chat,
MurthyChat is to unite the village communities, to preserve the unique culture and traditions and to share the useful knowledge with the community.
</p>
<br/>
           <p>your gateway to an enriched community experience! In our inaugural release, we're excited to unveil key features</p>
           <br/>
           <br/>
          <p>Seamless Content Sharing: Express yourself effortlessly with images, videos, and stories, connecting with neighbors and friends.</p>
          <br/>
          <br/>
          <p>Dynamic Event Updates: Stay in the know about local events, from festivals to charity drives, right at your fingertips.</p>
          <br/>
          <br/>
          <p>Insightful Announcements: Receive timely news from local organizations, schools, and businesses, keeping you informed.</p>
          <br/>
          <br/>
          <p>Sorting the Memories of the village community: collecting all the distributed memories of the community.</p>
          <br/>
          <br/>
          <p>Family needs to be represented within the community: by creating the family wall represents the members of the family in the village community.</p>
          <br/>
          <br/>
          <p>Engaging Multimedia: Immerse yourself in captivating videos and images that ignite conversations and connections.</p>
          <br/>
          <br/>
          <p>Privacy and Security: Your peace of mind matters; our robust privacy settings ensure a secure and respectful environment.</p>
          <br/>
          <br/>
          <p>Murthy Chat believes that strong communities thrive on connections. Join us today to be part of a vibrant space where ideas flourish, and local ties grow stronger. Download now use our services and empower your community connections!</p>
          <br/>
          <br/>
          <p>Sorting the Memories of the village community: collecting all the distributed memories of the community.</p>
          <br/>
          <br/>
          <p>Family needs to be represented within the community: by creating the family wall represents the members of the family in the village community.</p>
          <br/>
          <br/>
          <p>Engaging Multimedia: Immerse yourself in captivating videos and images that ignite conversations and connections.</p>
          <br/>
          <p>Thank you for embarking on this exciting journey with us.
.</p>
         
           {/* Repeat your content as needed */}
         </div>
       </div>
     </>
   );
 }
