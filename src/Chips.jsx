import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Chips.css"

function rando() {
    return Math.floor(Math.random() * 100) + 1;
}

class Chips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chips: [],
        }
        this.eatChips = this.eatChips.bind(this);
    }
    eatChips() {
        const styling = {
            top: `${rando()}%`,
            left: `${rando()}%`
        }
        this.setState({chips: [...this.state.chips, {source: "https://i5.walmartimages.com/asr/1e174f1f-e652-48ad-b2eb-9b13ce750a28_1.4d7815d3bdec6e2fe2d42168e4e97984.jpeg", styling: styling}]})
    }
    render() {
        const { chips } = this.state;
        return (
            <div className="Chips">
                {chips.length ? this.state.chips.map((el, idx) => (
                    <img src={el.source} style={el.styling} alt="chips" key={idx}/>
                )) : null}
                <div>
                    <h1>Chips eaten: {this.state.chips.length}</h1>
                    <button onClick={this.eatChips}>NomNom!</button>
                    <NavLink exact to={"/"}>Go back</NavLink>
                </div>
            </div>

        )
    }
}

export default Chips;