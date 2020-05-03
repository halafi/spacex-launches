import React, { useState } from "react";
import * as R from "ramda";
import { format } from "date-fns";
import { Launch } from "../../../../records/Launch";
import SelectButton from "../../../../components/SelectButton";
import FilterMenuDropdown from "../../../../components/FilterMenuDropdown";

type SortOptions = "ascend" | "descend";

type Props = {
  launches: Launch[];
  years: string[];
};

const SORT_LABELS = {
  ascend: "Ascending",
  descend: "Descending",
};

function LaunchesList({ launches, years }: Props) {
  const [sort, setSort] = useState<SortOptions>("ascend");
  const [filter, setFilter] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

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
        {showFilters && (
          <FilterMenuDropdown
            filters={years}
            activeFilter={filter}
            onFilterChange={(year) => setFilter(year)}
            onCancel={() => setShowFilters(false)}
          />
        )}
        <SelectButton
          className="Launches__main__launchesList__filters__year"
          icon="select"
          onClick={() => setShowFilters(true)}
        >
          Filter by Year
        </SelectButton>
        <SelectButton
          icon="sort"
          onClick={() => setSort(sort === "ascend" ? "descend" : "ascend")}
        >
          Sort {SORT_LABELS[sort]}
        </SelectButton>
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
