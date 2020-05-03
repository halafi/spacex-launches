import React, { useState } from "react";
import * as R from "ramda";
import { format } from "date-fns";
import { Launch } from "../../../../records/Launch";

type SortOptions = "ascend" | "descend";

type Props = {
  launches: Launch[];
  years: string[];
};

function LaunchesList({ launches, years }: Props) {
  const [sort, setSort] = useState<SortOptions>("ascend");
  const [filter, setFilter] = useState<string>("");

  const filteredLaunches = filter
    ? launches.filter((l) => l.year === filter)
    : launches;
  // @ts-ignore
  const sortedLaunches: Launch[] = R.sortWith([R[sort](R.prop("number"))])(
    filteredLaunches
  );

  return (
    <div className="Launches__main__launchesList">
      <div className="Launches__main__launchesList__filters">
        <div>
          <label>Filter by Year</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">none</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOptions)}
          >
            <option value="ascend">Ascending</option>
            <option value="descend">Descending</option>
          </select>
        </div>
      </div>
      {sortedLaunches.map((launch) => (
        <div
          key={launch.number}
          className="Launches__main__launchesList__launch"
        >
          <div>
            <span className="Launches__main__launchesList__launch__number">
              #{launch.number}
            </span>
            <span className="Launches__main__launchesList__launch__mission">
              {launch.missionName}
            </span>
          </div>
          <div className="Launches__main__launchesList__launch__dateRocket">
            <span className="Launches__main__launchesList__launch__date">
              {format(new Date(launch.date), "do MMM yyyy")}
            </span>
            <span className="Launches__main__launchesList__launch__rocket">
              {launch.rocketName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(LaunchesList);
