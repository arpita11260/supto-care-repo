import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Supto Care</h1>
                <p className="mt-4 ">
                  <small>
                    *This Supto care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.Providing health care services means "the timely use of personal health services to achieve the best possible health outcomes".
                  </small>
                </p>

                <p className="mt-5">
                  <small>Sristy © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Doctors</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the Update</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5>+0 88 017 777 36 75</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      91/A Rajarbag, Dhaka-1214
                      <br /> Bangladesh
                    </p>
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

export default Footer;