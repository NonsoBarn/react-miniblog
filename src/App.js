import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import { useRef, useState, useEffect } from "react";
import Account from "./Components/Account";
import Favorites from "./Components/Favorites";
// import ProtectedRoutes from "./ProtectedRoutes";
import Footer from "./Components/Footer";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const userEmailRef = useRef();
  const userNameRef = useRef();
  const errRef = useRef();

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userEmail, userName, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setUser("");
    setPwd("");
    setSuccess(true);
    // console.log({ user });
  };

  const menuToggle = () => {
    setIsOpen((current) => !current);
  };

  const menuClose = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="App font-YanoneKaffeesatz min-h-screen flex flex-col">
        <Navbar
          success={success}
          userEmail={userEmail}
          userName={userName}
          menuToggle={menuToggle}
          menuClose={menuClose}
          isOpen={isOpen}
        />
        <div onClick={menuClose} className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path=":id" element={<BlogDetails />} />
            <Route
              path="/Login"
              element={
                <Login
                  userEmail={userEmail}
                  userName={userName}
                  pwd={pwd}
                  setUserName={setUserName}
                  setUserEmail={setUserEmail}
                  setPwd={setPwd}
                  success={success}
                  errRef={errRef}
                  errMsg={errMsg}
                  handleSubmit={handleSubmit}
                  userNameRef={userNameRef}
                  userEmailRef={userEmailRef}
                />
              }
            />
            <Route path="/Signup" element={<Signup />} />

            {/* <Route element={<ProtectedRoutes />}> */}
            <Route path="/Account" element={<Account />} />
            <Route path="/Favorites" element={<Favorites />} />
            {/* </Route> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
