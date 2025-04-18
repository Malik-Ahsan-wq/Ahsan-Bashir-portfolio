import React from 'react'
import Specialities from "./Components/Specialities";
import Navbar from "./Components/Navbar";
import Experience from "./Components/Experience";
import Tab from "./Components/Tab";
import Recent from "./Components/Recent";
import Feedback from "./Components/Feedback";
import Comapnies from "./Components/Comapnies";
import Blog from "./Components/Blog";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Specialities />
      <Experience />
      <Tab />
      <Recent />
      <Feedback />
      <Comapnies />
      <Blog />
      <Pricing />
      <Footer />
    
    </>
  );
}

export default Home;
