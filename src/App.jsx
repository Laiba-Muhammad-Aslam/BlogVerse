import { useState } from "react";
import "./App.css";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import CreatePost from "./assets/pages/CreatePost";
import Footer from "./assets/Component/Footer.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav className="navbar">
        <h3 className="logo">BlogVerse</h3>
        <div className="div nav-items">
          <Link to="/"> Home </Link>

          {!isAuth ? (
            <Link to="/login"> Login </Link>
          ) : (
            <>
              <Link to="/createpost"> Create Post </Link>
              <button onClick={signUserOut}>Log Out</button>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>

      <Footer/>
    </Router>
    
  );
}

export default App;
