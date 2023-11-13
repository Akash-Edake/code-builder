import "./App.css";
import SignUp from "./components/common/forms/Sign Up/SignUp";
import SignIn from "./components/common/forms/Sign in/SignIn";
import SideBar from "./components/layout/sideBar/SideBar";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  const loginUser = JSON.parse(localStorage.getItem("userData")) || null;
  const navigate = useNavigate();
  useEffect(() => {
    if (loginUser?.email.length < 1) {
      // navigate("/signIn");
    }
  }, []);

  return (
    <>
      {loginUser?.email.length > 1 ? (
        <SideBar />
      ) : (
        <>
        
        {/* <SignIn /> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        </>
      )}

    </>
  );
}

export default App;
