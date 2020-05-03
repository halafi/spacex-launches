import React from "react";
import "./styles.scss";
import classNames from "classnames";

type Props = {
  onCancel: () => void;
  onFilterChange: (year: string) => void;
  filters: string[];
  activeFilter: string;
};

function FilterMenuDropdown({
  onCancel,
  filters,
  onFilterChange,
  activeFilter,
}: Props) {
  return (
    <>
      <div className="FilterMenuDropdownOverlay" onClick={onCancel} />
      <div className="FilterMenuDropdown">
        <div className="FilterMenuDropdown__Inner">
          <div
            className={classNames("FilterMenuDropdown__Inner__Item", {
              "FilterMenuDropdown__Inner__Item--active": activeFilter === "",
            })}
            onClick={() => {
              onFilterChange("");
              onCancel();
            }}
          >
            OFF
          </div>
          {filters.map((f) => (
            <div
              key={f}
              onClick={() => {
                onFilterChange(f);
                onCancel();
              }}
              className={classNames("FilterMenuDropdown__Inner__Item", {
                "FilterMenuDropdown__Inner__Item--active": activeFilter === f,
              })}
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FilterMenuDropdown;
