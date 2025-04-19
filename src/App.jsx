import React from "react"

import { Route ,Routes } from "react-router-dom"
import Contact from "./Components/Contact"
import Home from "./Home"

import About from "./Components/About";
import ProjectSection from './Components/ProjectSection';
import ProjectDetail from "./Components/ProjectDetail";
import BlogSection from "./Components/BlogSection";
import BlogDetail from "./Components/BlogDetail";
import Menubar from "./Components/Menubar";
import Recent from "./Components/Recent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Menubar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectSection />} />
        <Route path="/detail" element={<ProjectDetail />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blogDetail" element={<BlogDetail />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </>
  );
}




export default App;


