import React from 'react'
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const BannerCard = ({icon,heading,desc}) => {
    return (
        <>
            <div className="banner-cards">
                <span>{icon }</span>
                <h3>{ heading}</h3>
                <p>{ desc}</p>
            </div>
        </>
    )
}

export default BannerCard
