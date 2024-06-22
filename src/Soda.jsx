import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Soda.css"

class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <img src="https://content.oppictures.com/Master_Images/Master_Variants/Variant_1500/180505.jpg" alt="" />
                <div>
                    <h1>OMG SUGARRRRR</h1>
                    <NavLink exact to={"/"}>Go back</NavLink>
                </div>
                <img src="https://content.oppictures.com/Master_Images/Master_Variants/Variant_1500/180505.jpg" alt="" />
            </div>
        )
    }
}

export default Soda;