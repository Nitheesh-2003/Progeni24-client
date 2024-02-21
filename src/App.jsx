import Home from "@pages/Home";
import Auth from "@pages/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  About,
  Events,
  Tech,
  Works,
  Feedbacks,
  Contact,
  Navbar,
  StarsCanvas,
  College
} from "@components";
import { useState,useEffect } from "react";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  const [loading, setLoading] = useState(true);
  const [logoShow,setLogoShow]=useState(true)
  useEffect(() => {
    if (logoShow) {
      const timer = setTimeout(() => {
        setLoading(false);
        setLogoShow(false); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [logoShow]); 

  return (
    <>
        <div>
          {user ? <Navbar /> : null}
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
            />
            <Route
              path="/home/*"
              element={user ? <Home /> : <Navigate to="../auth" />}
            >
              <Route path="about" element={<College />} />
              <Route path="experience" element={<Events />} />
              <Route path="register" element={<Tech />} />
              <Route
                path="contact"
                element={
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                }
              />
            </Route>
            <Route
              path="/auth"
              element={user ? <Navigate to="../home" /> : <Auth />}
            />
            {/* <Route path='/profile/:id' element={user ? <ProfilePage /> : <Navigate to='../auth' />}/> */}
          </Routes>
        </div>
    </>
  );
}

export default App;
