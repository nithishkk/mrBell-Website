
import React from 'react';
import Title from '../Images/MC-logo-bubble.svg';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
      <>
      <div className="Title-container1">
      <a href='/'>
      <img src={Title} alt='Title' className='Title-img1'/>  

      </a>
  <a href="/" className='Top-Name1'>
    <h2>Murthy Chat</h2>
  </a>
</div>
    <div className='Container'>
     

      <section className='Container_item'>
      <h4 className='WelCome_Name'>Community Standards</h4>
      <br/>
      <p className='Content_detailes' >
      Murthy Chat welcomes you to our chat application chat and village community platform. We value authenticity , kindness, and we
are proud to offer a platform that empowers the community, you to share a participation in
development and store your culture, be memories of the village through its members. We
want Murthy Chat to be a place where people can have fun and express themselves while
feeling safe.
        </p>
       <br/>
      <p className='Content_detailes'>
      Our Community Standards are designed to help ensure that you, and all our users, use our
services safely, and they must be taken seriously. They are part of our   <Link to="/terms-and-condition" style={{textDecoration:"none"}} > <span style={{color:"#000000",textDecoration:"none"}}> Terms of Service</span> 
          </Link>, and
our   <Link to="/privacy-policy" style={{textDecoration:"none"}} > <span style={{color:"#000000",textDecoration:"none"}}> Privacy Policy</span> 
          </Link>, (together the “User Agreement”). If you don’t agree with any part of the
User Agreement, including the Community Standards, then it might be that Murthy Chat
isn’t for you.
      </p>
      <br/>
      <p className='Content_detailes'>
      The Community Standards are really just a collection of things that could be thought of as
being respectful to other people. Basically, if you’re doing something that you would not
want other people to do to you on Murthy Chat, then you’re probably violating the
Community Standards. But just in case you’re not sure, here is a list:
      </p>
      <br/>
      <p className='Content_detailes'>
      Bullying, Abuse, and Harassment: You may not share content that seeks to or does bully,
abuse or harass people, whether they are other users or non-users.
      </p>
      <br/>
      <p className='Content_detailes'>
      Hateful Content: You may not share content that is hateful towards people or organizations.
      </p>
      <br/>
      <p className='Content_detailes'>
      Child Sexual Exploitation: Child exploitation is strictly forbidden, and Murthy Chat has zero
tolerance towards any content that contains or promotes child sexual exploitation.
      </p>
      <br/>
      <p className='Content_detailes'>
      Illegal Activity: You may not share content that promotes or causes illegal activity.
      </p>
      <br/>
      <p className='Content_detailes'>
      Non-Consensual Nudity: Non-consensual nudity is strictly forbidden, and Murthy Chat has
zero tolerance towards any content that contains or promotes non-consensual nudity.
      </p>
      <br/>
      <p className='Content_detailes'>
      Non-Public Personal Information: You may not share content that includes other people’s
non-public personal information without their consent.
      </p>
      <br/>
      <p className='Content_detailes'>
      Suicide and Self-Harm: You may not share content that promotes, encourages, or glorifies
suicide or self-harm.
      </p>
      <br/>
      <p className='Content_detailes'>
      Violent Content: You may not share content that is threatening, inciting, glorifying, or
expressing a desire for violence or harm.
      </p>
      <br/>
      <p className='Content_detailes'>
      How to make a report
You can report any violation of these Community Standards directly through the reporting
tools in the Murthy Chat application or through our web form here  <Link to="/Contact" > <span style={{color:"#000000",textDecoration:"none"}}>Contact</span> 
          </Link>, The Murthy Chat
Support Team will review the report and reply if needed. We may use your contact
information, including your username, Phone number, to get in contact with you.
      </p>
      <br/>
      <p className='Content_detailes'>
      If you are not reporting content through the reporting tools in the Murthy Chat application,
you should screenshot the content or account that you believe violates the Community
Standards.
      </p>
      <br/>
      <p className='Content_detailes'>
      What happens after you make a report?
Any behaviour, activity, or content that we believe is contrary to the Community Standards
may be sanctioned, either temporarily or permanently.
      </p>
      <br/>
      <p className='Content_detailes'>
      We have the right to monitor the content and the use of the App, at any time, and at our
discretion, in order to verify compliance with the Community Standards and the Terms of
Use. Our decision as to whether there is a violation of the Community Standards is final.
Luckily, all of this should remain exceptional if you comply with the Community Standards.
      </p>
      <br/>
      <p className='Content_detailes'>
      Nevertheless, if you consider that a decision taken against you is unfair, you have the
opportunity to contest it by writing to us
      </p>
      <br/>
      <p className='Content_detailes'>That’s it for now.</p>
       
      </section>
      <div className="Tearms-Links">
      <Link to="/">Home </Link>
      <Link to="/terms-and-condition">Terms </Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="">©2024 Kuchi Inc</Link>

    </div>
    </div>
    </>
  );
}
