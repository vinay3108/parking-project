import React from "react";
import "./Benifit.css";
import BenefitCard from "./BenefitCard";
const Benifit = () => {
  return (
    <>
      <div className="benifit-container">
        <div className="benefit-data-container">
          <div className="benefit-data">
            <h3>Why Choose Parkin</h3>
            <h1>Parking Made Easy</h1>
          </div>
          <div className="benefit-card-styler">
            <BenefitCard
              image={
                "https://cdn.pixabay.com/photo/2018/09/14/03/51/guy-3676221__340.jpg"
              }
              heading={"Pre Book Your Space"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Enimdolorem ut Nam Lorem ipsum dolor sit amet consectetur adipisicin elit Totam dolorem harum enim"
              }
              additional={"READ MORE"}
            />
            <BenefitCard
              image={
                "https://cdn.pixabay.com/photo/2016/03/17/03/25/vehicle-1262249__340.jpg"
              }
              heading={"Quick & Easy Parking"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Enimdolorem ut Nam Lorem ipsum dolor sit amet consectetur adipisicin elit Totam dolorem harum enim"
              }
              additional={"READ MORE"}
            />
            <BenefitCard
              image={
                "https://cdn.pixabay.com/photo/2019/05/17/14/00/father-4209768__340.jpg"
              }
            
            heading={"Safe & Secure"}
            desc=
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit Enimdolorem ut Nam Lorem ipsum dolor sit amet consectetur adipisicin elit Totam dolorem harum enim"
            }
                          additional={ "READ MORE" }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Benifit;
