import React from "react";
import "./styles.scss";
import logo from "../../assets/spacex-logo.png"; // Tell webpack this JS file uses this image

function Launches() {
  return (
    <div className="Launches">
      <header className="Launches__header">
        <img src={logo} alt="spacex logo" className="Launches__logo" />
        <div className="Launches__reloadButton">Reload data</div>
      </header>
      <main>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default Launches;
