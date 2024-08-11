import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterForApp from "../components/FooterForApp";
import HomePage from "../components/HomePage";
import LoginPage from "../components/userinfo/LoginPage";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "../components/NotFoundPage";
import RegisterPage from "../components/userinfo/RegisterPage";
import ForgotPasswordPage from "../components/userinfo/ForgotPasswordPage";

const RouterForApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<HomePage />} /> */}
      
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/forgot" element={<ForgotPasswordPage/>}/>
          <Route path="*" element={<NotFoundPage />} /> {/* Wildcard Route */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default RouterForApp;
