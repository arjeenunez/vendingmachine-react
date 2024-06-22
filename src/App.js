// import Vendingmachine from "./Vendingmachine";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Vendingmachine from "./Vendingmachine"
import { Routes, Route, NavLink } from "react-router-dom"
import "./App.css"


function App() {
  return (
    <div className="App">
      <nav className="App-nav">
          <NavLink exact to={"/"}>Home</NavLink>
          <NavLink exact to={"/soda"}>Soda</NavLink>
          <NavLink exact to={"/chips"}>Chips</NavLink>
          <NavLink exact to={"/sardines"}>Sardines</NavLink>
      </nav>
      <Routes>
          <Route exact path="/" Component={Vendingmachine}/>
          <Route exact path="/soda" Component={Soda}/>
          <Route exact path="/chips" Component={Chips}/>
          <Route exact path="/sardines" Component={Sardines}/>
      </Routes>
    </div>
  );
}

export default App;
