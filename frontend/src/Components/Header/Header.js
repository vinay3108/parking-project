import React from 'react'
import './Header.css'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Header = () => {
  return (
    <>
      <div className="main-container">
        <div className="logo-side">
          <h1>Park<span>ln</span></h1>
        </div>
        <div className="content-side">
          <div className="upper-part">
            <div className="email-part">
              <p>
                <span>
                  <LocationOnOutlinedIcon />
                </span>
                New Delhi
              </p>
              <p>
                <span>
                  <MailOutlineIcon />
                </span>
                Parkingnew@gmail.com
              </p>
            </div>
            <div className="social-icons-part">
              <div>
                <a href="">
                  <FacebookOutlinedIcon />
                </a>
              </div>
              <div>
                <a href="">
                  <TwitterIcon />
                </a>
              </div>
              <div>
                <a href="">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <div className="main-side">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Parking</a>
                </li>
                <li>
                  <a href="#">Price</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="login-side">
              <button>LOGIN</button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header
