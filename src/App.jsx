import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Contact from "./Components/Contact"
import Home from "./Home"
import About from "./Components/About";
import ProjectSection from './Components/ProjectSection';
import ProjectDetail from "./Components/ProjectDetail";
import BlogSection from "./Components/BlogSection";
import BlogDetail from "./Components/BlogDetail";
import Menubar from "./Components/Menubar";
import Recent from "./Components/Recent";
import { pageTransition } from "./utils/animations";
function App() {
  const location = useLocation();

  return (
    <>
      <Menubar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          } />
          <Route path="/project" element={
            <motion.div {...pageTransition}>
              <ProjectSection />
            </motion.div>
          } />
          <Route path="/detail" element={
            <motion.div {...pageTransition}>
              <ProjectDetail />
            </motion.div>
          } />
          <Route path="/blog" element={
            <motion.div {...pageTransition}>
              <BlogSection />
            </motion.div>
          } />
          <Route path="/blogDetail" element={
            <motion.div {...pageTransition}>
              <BlogDetail />
            </motion.div>
          } />
          <Route path="/recent" element={
            <motion.div {...pageTransition}>
              <Recent />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}




export default App;


