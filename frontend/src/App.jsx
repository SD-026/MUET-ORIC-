import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './pages/Features.jsx';
import Hero from "./pages/Hero.jsx";
import Stats from "./pages/Stats.jsx";
import ResearchThemes from './pages/ResearchThemes.jsx';
import DirectorMsg from './pages/DirectorMsg.jsx';
import AboutUs from './pages/AboutUs.jsx';
import SignUp from "./pages/SignUp.jsx";
import Hero1 from './pages/Hero1.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import OurTeamPage from './pages/OurTeamPage.jsx';
import WhatIsIpo from './pages/WhatIsIpo.jsx';
import IpTechPolicy from './pages/IpTechPolicy.jsx';
import IndustrialCollaboration from './pages/IndustrialCollobration.jsx';
import InstitutionalCollaboration from './pages/InstitutionalCollaboration.jsx';
import OtherCollaboration from './pages/OtherCollobration.jsx';
import Login from './pages/Login.jsx';
import Home from './pages_Admin/Home.jsx';
import TeacherDashboard from './pages_Admin/TeacherDashboard.jsx';
import UserManage from './pages_Admin/UserManage.jsx';
import LoginApprove from './pages_Admin/LoginApprove.jsx';
import FundOpportunity from './pages/FundOpportunity.jsx';
import FundProjects from './pages/FundProjects.jsx';
import ResearchJournals from './pages/ResearchJournals.jsx';
import WhoWeAre from './pages/WhoWeAre.jsx';
import WhatWeDo from './pages/WhatWeDo.jsx';
import NewsAndEvents from './pages/NewsAndEvents.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import Sidebar  from './components/Sidebar.jsx';
import Home1 from './pages_Admin/Home1.jsx';

import { stringify } from 'postcss';
import { useEffect, useState } from 'react';


import AdminViewProfile from './pages_Admin/AdminViewProfile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Unauthorized from './components/Unauthorized.jsx';
import UserHome from './pages_user/UserHome.jsx';



function App() {
  // const [user, setuser] = useState()
  const [user, setUser] = useState(null);

  // On mount, get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  return (
    <Router>
      
      <div className="min-h-screen bg-black">
        {/* {user===null||user===undefined?
        <Navbar />:''} */}

{/* {user && <Navbar />} */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
            <Navbar >
              {/* <Hero /> */}
              <Hero1/>
              <DirectorMsg />
              <Stats />
              <AboutUs />
              <ResearchThemes />
              {/* <ImageSlider/> */}
              {/* <Features/> */}
              </Navbar>
            </>
          } />


          {/*  Contact Us */}
          <Route path="/contact" element={<Navbar><ContactUsPage /></Navbar>} />


          {/*  /news-events */}
          <Route path="/news-events" element={<Navbar>  <NewsAndEvents /></Navbar>} />

          {/*  /bic/what-we-do*/}
          <Route path="/bic/what-we-do" element={<Navbar><WhatWeDo /></Navbar>} />

           {/*  /bic/who-we-are */}
           <Route path="/bic/who-we-are" element={<Navbar><WhoWeAre /></Navbar>} />

           {/*  Research Journals */}
           <Route path="/research-innovation/research-journals" element={<Navbar><ResearchJournals /></Navbar>} />

          {/*  FundProjects */}
          <Route path="/research-innovation/funded-projects" element={<Navbar><FundProjects /></Navbar>} />

          {/*  FundOpportunity */}
          <Route path="/research-innovation/funded-opportunity" element={<Navbar><FundOpportunity /></Navbar>} />

           {/*  OtherCollaboration */}
           <Route path="/collaboration/other-collaboration" element={<Navbar><OtherCollaboration /></Navbar>} />

           {/*  insitutional-collobration */}
           <Route path="/collaboration/institutional-collobration" element={<Navbar><InstitutionalCollaboration /></Navbar>} />

           {/*  industrial-collobration */}
           <Route path="/collaboration/industrial-collobration" element={<Navbar><IndustrialCollaboration /></Navbar>} />

           {/* IPo Policy  */}
           <Route path="/about/ip-tech-policy" element={<Navbar><IpTechPolicy /></Navbar>} />

           {/* what-is-ipo  */}
           <Route path="/about/what-is-ipo" element={<Navbar><WhatIsIpo /></Navbar>} />
          
          {/* OurTeam Page */}
          <Route path="/about/team" element={<Navbar><OurTeamPage /></Navbar>} />

          {/* AboutUs Page */}
          <Route path="/aboutus" element={<Navbar><AboutUsPage /></Navbar>} />

          {/* Signup Page */}
          <Route path="/signup" element={<Navbar><SignUp /></Navbar>} />
          <Route path="/login" element={<Navbar><Login /></Navbar>} />
          <Route path="/sidebar" element={<Sidebar />} />

        <Route path="/unauthorized" element={<Unauthorized />} />

          
          
          {/* {Admin pages } */}



          {/* Admin Only */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/Dashboard" element={<Home1 />} />
          <Route path="/home1" element={<Home />} />
          {/* <Route path="/Dashboard" element={<Home1 />} /> */}
          {/* <Route path="/Admin-Dash" element={<TeacherDashboard />} /> */}
          <Route path="/All-Users" element={<UserManage />} />
          {/* <Route path="/Student-profile/:studentId" element={<UserManage />} /> */}
          <Route path="/LoginApprove" element={<LoginApprove />} />
          <Route path="/AdminProfile" element={<AdminViewProfile />} />
        </Route>

  {/* User Only */}
        <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/UserDashboard" element={<UserHome />} />
          <Route path="/sidebar" element={<Sidebar />} />

           {/* <Route path="/home1" element={<Home />} />
         

          <Route path="/Admin-Dash" element={<TeacherDashboard />} />
          <Route path="/All-Users" element={<UserManage />} />
          <Route path="/Student-profile/:studentId" element={<UserManage />} />

          <Route path="/LoginApprove" element={<LoginApprove />} /> */}
          <Route path="/userProfile" element={<AdminViewProfile />} /> 
        </Route>







        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
