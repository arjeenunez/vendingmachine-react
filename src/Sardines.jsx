import React, { Component } from "react";
import "./Sardines.css"
import { NavLink } from "react-router-dom";

class Sardines extends Component {
    render() {
        return (
            <div className="Sardines">
                <div>
                    <h1>You don't eat the sardines! The sardines eat you!</h1>
                    <NavLink exact to={"/"}>Go back</NavLink>
                </div>
            </div>
        )
    }
}

export default Sardines;