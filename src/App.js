import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Main from "./Pages/Main"
import PrivacyPolicy from './Pages/Privacypolicy'
import TermsAndCondition from './Pages/TermsAndCondition'
import CommunityStandards from './Pages/CommunityStandards'
import Contact from './Pages/Contact';


export default function App() {
  return (
<div>

<Routes>
       <Route path="/" element={<Main/>} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/community-standards" element={<CommunityStandards />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
</div>

  )
}