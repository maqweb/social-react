import React from "react";
import preloader from "../../../assets/images/bars.svg";

const Preloader = (props) => {
    return (
        <div className="loader">
            <img src={preloader} alt=""/>
        </div>
    )
};

export default Preloader;