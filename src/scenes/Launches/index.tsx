import React, { useState, useEffect, useMemo } from "react";
import * as R from "ramda";
import classNames from "classnames";
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
  // just quick solution
  const [pendingRefresh, setPendingRefresh] = useState<boolean>(false);

  useEffect(() => {
    setPendingRefresh(false);
    async function fetchLaunches() {
      fetch("https://api.spacexdata.com/v3/launches")
        .then((res) => res.json())
        .then((json) => {
          setLaunches(mapperLaunches(json));
        })

        .catch(() => setError("Server error: getting launches failed"));
    }
    fetchLaunches();
  }, [pendingRefresh]);

  const years = useMemo(
    () => R.uniq(launches.map((launch) => launch.year)).sort(),
    [launches]
  );

  return (
    <div className="Launches">
      <header className="Launches__header">
        <img src={logo} alt="spacex logo" className="Launches__logo" />
        <div
          className={classNames("Launches__reloadButton", {
            "Launches__reloadButton--disabled": pendingRefresh,
          })}
          onClick={() => !pendingRefresh && setPendingRefresh(true)}
        >
          Reload data{" "}
          <Icon
            size={14}
            variant="refresh"
            className="Launches__reloadButton__icon"
          />
        </div>
      </header>
      <main className="Launches__main">
        <div className="Launches__main__launchLogo">
          <img
            className="Launches__main__launchLogo__img"
            src={launchHome}
            srcSet={`${launchHome2x} 2x, ${launchHome3x} 3x`}
            alt="rocket launch logo"
          />
        </div>
        {error || <LaunchesList launches={launches} years={years} />}
      </main>
    </div>
  );
}

export default Launches;
