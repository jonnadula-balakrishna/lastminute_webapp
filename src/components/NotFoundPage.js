import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NotFoundPage.css"; // Ensure this path is correct

const NotFoundPage = () => {
  return (
    <div className="page_404">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-12 text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center">404</h1>
            </div>

            <div className="contant_box_404">
              <h3 className="h2">Looks like you're lost</h3>
              <p>The page you are looking for is not available!</p>

              <Link to="/" className="link_404">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
