import React from "react";
import Title from '../Images/MC-logo-bubble.svg';
import { Link } from 'react-router-dom';

export default function Privacypolicy() {
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
    <div className="Container">
            
      <section className="Container_item">
        <h4 className="WelCome_Name">Privacy policy.</h4>
        <br />
        <p className="Content_detailes">
          <strong>Chat Room, </strong>a communication channel, communication in
          the form of numbers instead of text, English letters are represented
          in the form of numbers, a unique feature in Murthy Chat.
        </p>
        <p className="Content_detailes">
          <strong> Village Voice, </strong> A Village is the beautiful human
          settlement with different Age, Cast, Religion, Genders, Mindset but
          live in the community with each other from centuries and we wish to
          flourish in coming times also.
        </p>
        <br />

        <p className="Content_detailes">
          We love villages for their unique culture, Traditions and People. Our
          platform is for the people who Love their village to unite in a single
          group, record, store Stories, Culture, Traditions, Festivals, Events,
          Announcements and represent families.
        </p>
        <br />

        <p className="Content_detailes">
          Murthy Chat is to “Document Village Life”.
        </p>
        <br />
        <p className="Content_detailes">
          Murthy Chat privacy policy will be for the user agreement, which shows
          how we respect and protect our user information, data.
        </p>
        <br />
        <p className="Content_detailes">
          It is designed to know what information we collect about you, and
          controls we provide to manage the information you share with us.
          Throughout the user agreement some words have specific meaning and
          they should be interrupted the same way whenever they are used.
        </p>
        <br />
     
        <p className='Content_detailes'>
          Read complete to know more, how we respect your information.
          <br/>
          <br />
          <strong>1. Information that you provide with us</strong>
          <br/>
          <br />
          <strong>1.1 The data that we receive directly from you</strong>
          <br />
          In the form of Messages, Photos, Videos and files, Mobile number, Profile photo, Mother Name and Blood Group.
          <br />
          Content Data: We receive Content (as defined in the Terms) that you create when you use our Services. This includes: profile photos, photos, videos, files, comments, posts, geolocation or Contacts. 
          <br/>
          Remember, as we are working in a community platform, other users can copy (e.g., screenshot) your Content and share it through other services so we recommend that you do not share any Content that you do not want other people see or copy. If you share violated, abusive, sexual, terror content you are solely responsible.
          <br />
          Communications with Murthy Chat: When you report a concern with our Services, respond to a survey, 
          request assistance, or
           exercise your rights, we receive information from you that
           is necessary to support you, respond to you, and improve our services. This may include: content of message, 
           photos, copies of government issued identification, identifiers (e.g., phone numbers or email address),
            or other information.
          <br />
          <strong>1.2 Data we collect when you use our Services</strong>
          <br />
          Like all Internet based services, as you use our Services, we automatically receive information about you from your device and your usage of our Services:
          <ul>
            <li>Connection and Technical Data: IP address, account creation date, last login, terminal equipment and port.</li>
            <li>Interaction Data: number of friends, friend invitations, reactions, comments you leave on Content shared by others, the friends with whom you interact the most, functional data related to comments or messages. .</li>
            <li>Selfie in Profile Photo: As we are working with a community a large number of users can join in a single community so to avoid unknown People, we need identification.</li>
            <li>Mother Name: To give representation to Mother.</li>
            <li>Blood Group: To Provide information in the community, so that you can help People in need.</li>
            <li>Device and Equipment Data: device type, operating system version, language preference, and applications.</li>
          </ul>
          We also receive data when you decide at your discretion to use certain features of our Services:
          <ul>
            <li>Cameras and Photos Library: You can create an account without allowing us to access and collect data from your device’s camera or photo library. If you refuse to allow us this access, you will not be able to share or see Content on our Services. It’s a fundamental part of how Murthy Chat works.</li>
            <li>Geolocation Data: When you share your Geolocation data with us as part of your Content, the information is retained for as long as the Content remains on our system (i.e., until you delete the Content or your account).  </li>
            <li>Address Book Data: You can decide to allow MurthyChat to access your address book to identify the friends in your Address Book who may already be on MurthyChat. We do not access your Address Book without your permission. If you decide to find your friends by giving us access to your Address Book, we hash the phone numbers in your Address Book (we don’t look at anything else), securely send those hashed phone numbers to our systems, compare those hashed numbers to the list of hashed phone numbers for other Murthy Chat users, and return the appropriate data based on the Address book. 
              
            </li>
            <li>Integrations with partners: When you decide to connect a partner application to use a specific integration on Murthy Chat, we receive information that allows us to bring that feature to you. This will include all necessary device data, and</li>
          </ul>
        </p>
        {/* <p className="Content_detailes">
          <p>1. Information that you provide with us</p>
          <br />
          <p>1.1 The data that we receive directly from you</p>
          <br />
          In the form of Messages, Photos, Videos and files, Mobile number,
          Profile photo, Mother Name and Blood Group.
          <br />
          <strong>Content Data:</strong> We receive Content (as defined in the
          Terms) that you create when you use our Services. This includes:
          profile photos, photos, videos, files, comments, posts, geolocation or
          Contacts. Remember, as we are working in a community platform, other
          users can copy (e.g., screenshot) your Content and share it through
          other services so we recommend that you do not share any Content that
          you do not want other people see or copy, if you share violated,
          abusive, sexual, terror content you are solely responsible.
          <br />
          <strong>Communications with Murthy Chat:</strong> When you report a
          concern with our Services, respond to a survey, request assistance, or
          exercise your rights, we receive information from you that is
          necessary to support you, respond to you, and improve our services.
          This may include: content of message, photos, copies of government
          issued identification, identifiers (e.g., phone numbers or email
          address), or other information.
          <br />
          <strong>1.2 Data we collect when you use our Services</strong>
          <br />
          Like all Internet based services, as you use our Services, we
          automatically receive information about you from your device and your
          usage of our Services:
          <br />
          <strong>Connection and Technical Data:</strong> <br /> IP address,
          account creation date, last login, terminal equipment and port.
          <br />
          <strong>Interaction Data:</strong> <br />
          friends, number of friends, friend invitations, reactions, comments
          you leave on Content shared by others, the friends with whom you
          interact the most, functional data related to comments or messages.
          <br />
          <strong>Selfie in Profile Photo:</strong> <br /> As we are working
          with a community a large number of users can join in a single
          community so to avoid unknown People, we need identification.
          <br />
          <strong>Mother Name:</strong> <br /> To give representation to Mother.
          <br />
          <strong>Blood Group:</strong> <br /> To Provide information in the
          community, so that you can help People in need.
          <br />
          <strong>Device and Equipment Data:</strong> <br /> device type,
          operating system version, language preference, and applications. We
          also receive data when you decide at your discretion to use certain
          features of our Services:
          <br />
          <strong>Cameras and Photos Library:</strong> <br />
          You can create an account without allowing us to access and collect
          data from your device’s camera or photo library. If you refuse to
          allow us this access, you will not be able to share or see Content on
          our Services. It’s a fundamental part of how Murthy Chat works.
          <br />
          <strong>Geolocation Data:</strong> <br /> You can decide to share your
          location; it helps to serve you better. If you choose to share your
          location, depending on the feature, you can share your precise or
          approximate location.
          <br />
          <strong>Address Book Data:</strong>
          <br /> You can decide to allow MurthyChat to access your address book
          to identify the friends in your Address Book who may already be on
          MurthyChat. We do not access your Address Book without your
          permission. If you decide to find your friends by giving us access to
          your Address Book, we hash the phone numbers in your Address Book (we
          don’t look at anything else), securely send those hashed phone numbers
          to our systems, compare those hashed numbers to the list of hashed
          phone numbers for other Murthy Chat users, and return the appropriate
          data based on the Address book. We use geolocation and Address books
          to provide better service.
          <br />
          <strong>Integrations with partners:</strong>
          <br />
          When you decide to connect a partner application to use a specific
          integration on Murthy Chat, we receive information that allows us to
          bring that feature to you. This will include all necessary device
          data, and other optional data that you may choose to share as part of
          the integration.
        </p> */}
        <br/>
        <p className='Content_detailes'>
         <strong> 2. How we use information we receive about you</strong>
          <br />
          We would not want anyone selling our information, so we do not sell your information to any third parties at any cost. We use your information carefully and thoughtfully to bring you, our Services.
          <br />
          Our Services are brought to you through a variety of software and technical infrastructure. Understanding how these systems work is complicated and they are constantly evolving as we improve our Services. Information is often used by multiple parts of the systems to bring you even just a small feature. As a general rule the use cases Murthy Chat makes of the information we receive falls into the following 
          <ul>
            <li> categories: Operation, Improvement, and Provision of our Services: To create an account for you, receive and display Content, identify Content or accounts that may interest you, ensure our Services operate as you expect, and improve them.</li>
            <li>Safety and Security: Ensure your and other users’ safety and security, the security of our Services, our partners, and compliance with relevant laws and regulations.</li>
            <li>Communications: We want to hear from you and we hope you want to hear from us so we need to use your information to communicate with you. This can happen when we need to communicate with you about a feature of our Services or when you contact us to ask a question or report Content.</li>
            <li>Research: We like real feedback from real users. When we do research, we let you know and you get to decide if you want.</li>
          </ul>
        </p>
        <br/>

        <p className='Content_detailes'>
          <strong>3. When we share information about you
</strong>
          <br />
          
          We only share your information when it’s necessary to provide you our Services or it’s required by law. That generally falls into the following categories:
          <ul>
            <li>Murthy Chat Employees: To bring our Services to you or provide you support, authorized Murthy Chat employees may need to get access to your information.</li>
            <li>Other Users: When you share Content through our Services, that Content is available to your community members, friends.</li>
            <li>Service Providers: To bring you our Services we work with a small group of partners who provide us services. This includes partners who help with technical and hosting support, sending notifications, publishing, and sharing content, user analytics and satisfaction surveys, management of security incidents or fraudulent activity, etc. In working with those partners, we may share your information with them to bring you our Services.</li>
            <li>Partner Integrations: Where we partner to bring you a feature, we may need to share your information with the partner to integrate the feature into our Services.</li>
            <li>Legal and Statutory Purposes: From time to time we may receive legal requests for information related to our users, be required to proactively share data with authorities when we learn of certain Content on our Services (e.g., Child Sexual Abuse Material or terrorism), address fraud or security concerns, or protect people on our Services or elsewhere from harm.</li>
            <li>Change in Ownership: In the event of a merger, acquisition, reorganization or sale of assets, or bankruptcy, Murthy Chat may share, sell or transfer information about you. This Privacy Policy would apply to all transferred information.</li>
          </ul>
        </p>
        <br/>
        <p className='Content_detailes'>
          <strong>4. How long do we keep information about you?</strong>
          <br/>
          <br />
          Our goal is to keep your information only for as long as it’s needed to provide you, our Services. Sometimes legal requirements mean that we have to keep your information for longer than our stated practices. Generally, we keep your information according to the timelines below:  <br/>
          <ul>
            <br/>
            <li>Account Creation Data: retained indefinitely (i.e., as long as you have an active account) as it is required to provide and operate an account for you. If you choose to delete your account this information will be deleted.</li> <br/>
            <li>Content Data: retained indefinitely (i.e., as long as you have an active account) or until the Content is deleted by you.</li> <br/>
            <li>Communications with MurthyChat: retained for no longer than 24 months.</li>  <br/>
            <li>Connection and Technical Data: retained for no longer than 24 months, however, some connection data is also part of the Account Creation Data and is kept consistent with retention periods for that data.</li> <br/>
            <li>Interaction Data: retained indefinitely (i.e., as long as you have an active account) or until the interaction is deleted by you.</li>  <br/>
            <li>Cameras and Photos library: Content data is retained indefinitely (i.e., as long as you have an active account) or until the Content is deleted by you.</li> <br/>
            <li>Geolocation Data: When you share your Geolocation data with us as part of your Content, the information is retained for as long as the Content remains on our system (i.e., until you delete the Content or your account).</li> <br/>
            <li>Address Book Data: Where we keep phone numbers, we keep them in a hashed form and they are only used to help find your villages, friends where you choose to do so. This information is retained indefinitely (i.e., as long as you have an active account) as it is required to provide and operate an account for you.</li> <br/>
          </ul>
        </p>


        <p className="Content_detailes">
          <strong>5. What controls do you have over your information?</strong>
          <br />
          Block or Hide Users Policy:
          <br />
          To provide authenticity, great content, experience while using our
          services, we are working within the community, to manage user’s
          interests, we provide block user, blocked user details are
          confidential, in case of unauthorised activity, your account gets
          deactivated for further non- functional.
          <br />
          If you block or hide a user, at any time you can go into the settings
          of the applications and view who you have blocked or hidden. You can
          also unblock or unhide them at any time.
          <br />
          Delete Your Account: In the settings of the applications, you can
          choose to delete your account at any time.e.
          <br />
          <br/>
        </p>
        <p className="Content_detailes">
          <strong>6. What rights do you have over your information</strong>
          <br />
          Privacy is a fundamental human right. That means every person that
          uses our Services, irrespective of where they reside, can expect the
          same things from us.
          <ol>
            <li>
              1. &nbsp;Delete Your Account through the settings in the
              applications or by contacting privacy support;
            </li>
            <li>
              2. &nbsp;Understand who we share your data with by reading this
              list of service providers and partners (Link) or by contacting
              privacy support;
            </li>
            <li>
              3. &nbsp;Get a copy of your information by contacting privacy
              support;
            </li>
            <li>
              4. &nbsp;Correct your information by using the controls in the
              application or by contacting privacy support;
            </li>
            <li>
              5.&nbsp;Appeal a decision related to your information by
              contacting privacy support;
            </li>
            <li>
              6. &nbsp;Ask a question about our privacy practices by contacting
              privacy support;
            </li>
            <li>
              7.&nbsp; Contact our Office of Data Protection by contacting
              privacy support.
            </li>
          </ol>
        </p>
        <br/>

        {/* Section 7: Contact */}
        <p className="Content_detailes">
          <strong>7. Contact</strong>
          <br />
          Provide Address, link to contact us.
          <br />
          We are here to help you at all times, for any services related
          queries.
        </p>
      </section>
    </div>
    <div className="Tearms-Links">
      <Link to="/">Home </Link>
      <Link to="/terms-and-condition">Terms</Link>
      <Link to="/community-standards">Community Standards</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="">©2024 Kuchi Inc</Link>

    </div>
    </>
  );
}
