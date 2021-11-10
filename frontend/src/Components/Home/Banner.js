import React from 'react'
import './Banner.css'
import BannerCard from './BannerCard'
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
const Banner = () => {
    return (
      <>
        <div className="banner-wrapper">
          <div className="banner-image"></div>
          <div className="banner-data-container">
            <div className="banner-data-heading">
              <h1>Why Choose Parking</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                itaque quod et magni iure molestias explicabo qui odio libero
                necessitatibus aspernatur, accusantium natus quam quibusdam
                sequi veniam! Voluptatibus deleniti aque recusandae
                magni?
              </p>

              <div className="banner-card-style">
                <BannerCard
                  icon={<BookOnlineIcon />}
                  heading={"Stress Free Booking"}
                  desc={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum."
                  }
                />
                <BannerCard
                  icon={<DataSaverOnOutlinedIcon />}
                  heading={"24 Hr Services"}
                  desc={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum."
                  }
                />
              </div>
              <div className="banner-card-style">
                <BannerCard
                  icon={<AccountBalanceIcon />}
                  heading={"Save Money & Time"}
                  desc={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum."
                  }
                />
                <BannerCard
                  icon={<PermIdentityOutlinedIcon />}
                  heading={"Best Parking Management"}
                  desc={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum."
                  }
                />
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Banner
