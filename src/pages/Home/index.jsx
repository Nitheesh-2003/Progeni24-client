import {
  Contact,
  Events,
  Hero,
  Tech,
  StarsCanvas,
  About,
  College
} from "@components";
import Register from "@pages/Register";
import Logo from "@components/Logo";
import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Footer from "@components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='relative z-0 bg-primary'>
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div className="relative z-0 bg-primary w-full h-[100vh] overflow-hidden flex justify-center items-center">
                  <Logo />
                </div>
              ) : (
                <>
                  <div className="relative z-0">
                    <Hero />
                    <StarsCanvas />
                  </div>
                  <About />
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                  <Footer />
                </>
              )
            }
          />
          <Route path="about" element={<><College /><Footer /></>} />
          <Route path="events" element={<div><Events /><Tech /><Footer /></div>} />
          <Route path="register" element={<div className="relative z-0"><Register /><Footer /><StarsCanvas /></div>} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
