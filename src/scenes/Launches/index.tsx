import React, { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../../assets/spacex-logo.png";
import Icon from "../../components/Icon";
import launchHome from "../../assets/img/launch-home.png";
import launchHome2x from "../../assets/img/launch-home@2x.png";
import launchHome3x from "../../assets/img/launch-home@3x.png";
import LaunchesList from "./components/LaunchesList";
import mapperLaunches from "./services/mapperLaunches";
import { Launch } from "../../records/Launch";

function Launches() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchLaunches() {
      fetch("https://api.spacexdata.com/v3/launches")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setLaunches(mapperLaunches(json));
        })

        .catch((err) => setError("Server error: getting launches failed"));
    }
    fetchLaunches();
  }, []);

  console.log(launches);
  return (
    <div className="Launches">
      <header className="Launches__header">
        <img src={logo} alt="spacex logo" className="Launches__logo" />
        <div className="Launches__reloadButton">
          Reload data{" "}
          <Icon
            size={14}
            variant="refresh"
            className="Launches__reloadButton__icon"
          />
        </div>
      </header>
      <main className="Launches__main">
        <div>
          <img
            src={launchHome}
            srcSet={`${launchHome2x} 2x, ${launchHome3x} 3x`}
            alt="rocket launch logo"
          />
        </div>
        {error || <LaunchesList launches={launches} />}
      </main>
    </div>
  );
}

export default Launches;
