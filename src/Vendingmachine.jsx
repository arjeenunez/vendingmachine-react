import React, { Component } from "react";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./Vendingmachine.css"

class Vendingmachine extends Component {
    render() {
        return (
            <div className="Vendingmachine">
                <div className="Vendingmachine-text">Hi there, i am a vending machine. What would you like to eat?</div>
                <nav className="Vendingmachine-nav">
                    <Link exact to={"/soda"}>Soda</Link>
                    <Link exact to={"/chips"}>Chips</Link>
                    <Link exact to={"/sardines"}>Sardines</Link>
                </nav>
            </div>
        )
    }
}

export default Vendingmachine;