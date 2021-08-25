import React from "react";
import logo from './logo.svg';
import './App.css';
import ROUTES, { RenderRoutes } from "./routes";
import {displayRouteMenu} from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
      <div style={{ flex: 0.3, backgroundColor: "#f2f2f2" }}>
        {displayRouteMenu(ROUTES)}
      </div>
      <div>
        <RenderRoutes routes={ROUTES}/>
      </div>
    </div>
    </div>
  );
}

export default App;

