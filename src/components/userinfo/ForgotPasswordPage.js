import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ForgotPasswordPage.css"

const ForgotPasswordPage = () => {
  return (
    <div className="forgot_password_page">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg p-4">
              <div className="text-center">
                <img
                  className="mb-4"
                  src="https://via.placeholder.com/100.png?text=Logo"
                  alt="Logo"
                  width={100}
                />
                <h2 className="mb-3">Forgot Your Password?</h2>
                <p className="mb-4">
                  Enter your email address below, and we'll send you a link to
                  reset your password.
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="btn btn-primary w-100 mb-3">
                  Send Reset Link
                </button>
                <div className="text-center">
                  <Link to="/login" className="text-primary">
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
