import React from "react";
import { Launch } from "../../../../records/Launch";

type Props = {
  launches: Launch[];
};

function LaunchesList({ launches }: Props) {
  return (
    <div>
      {launches.map((launch) => (
        <div key={launch.number}>
          {launch.number} {launch.missionName}
        </div>
      ))}
    </div>
  );
}

export default LaunchesList;
