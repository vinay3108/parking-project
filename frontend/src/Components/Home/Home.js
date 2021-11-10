import React from 'react'
import './Home.css'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="home-data-container">
            <div className="home-data">
              <h1>Find Amazing Parking Space Near You</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos similique harum minima beatae corporis obcaecati
                qua expedita cupiditate tempora error natus incidunt
                iste nulla!
              </p>
              <button><span>Show Parking Spaces</span></button>
            </div>
          </div>
          <div className="home-parking-container">
            <div className="parking-upper-side">
              <div className="timer-group">
                <input className="btn grp-1" type="button" value="Hourly" />
                <input className="btn grp-2" type="button" value="Monthly" />
              </div>
              <div className="input-group">
                <span>
                  <LocationOnOutlinedIcon />
                </span>
                <input
                  className="btn"
                  type="text"
                  placeholder="Address, Place, City or Zip Code"
                />
              </div>
              <div className="setting-group">
                <input className="btn grp-1" type="button" value="From 05-05-2021" />
                <input className="btn grp-2" type="button" value="Search Now" />
              </div>
            </div>
            <div className="parking-lower-side">
              <div className="parking-near-me">
                <span>
                  <NearMeOutlinedIcon />
                </span>
                <input
                  className="btn"
                  type="button"
                  value="Find Parking Near Me"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
