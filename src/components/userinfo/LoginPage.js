import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onLogin = () => {
    toast.success("Login success");
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100vh" }}
            >
              <div className="card w-100">
                <div className="text-center p-3">
                  {/* Logo or branding area */}
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://img.icons8.com/fluency/720/null/guest-male.png"
                      className="img-fluid shadow-2-strong mb-3"
                      width={"150px"}
                      alt={"Logo"}
                    />
                  </div>
                  <div>
                    <div className="mb-3">
                      <label className="form-label">User Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="mb-4 position-relative">
                      <label className="form-label">Password</label>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="form-control pe-5"
                        placeholder="Enter password"
                      />
                      <span
                        className="position-absolute top-50 end-90 translate-middle-y"
                        style={{ right: "10px" }}
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <EyeSlash size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </span>
                    </div>
                    <button
                      className="btn btn-primary w-100 mb-3"
                      onClick={onLogin}
                    >
                      Login
                    </button>
                    <div className="text-center">
                      <div className="form-text">
                        <p>
                          <Link to={"/register"}>
                            New User? Need an account? &nbsp;
                          </Link>
                        </p>
                      </div>
                      <div className="text-danger">
                        <Link to={"/forgot"}>Forgot Password</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
