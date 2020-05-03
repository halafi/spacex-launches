import React from "react";
import Icon, { IconVariant } from "../Icon";
import "./styles.scss";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  icon: IconVariant;
  className?: string;
  iconSize?: number;
  onClick: () => void;
};

function SelectButton({
  children,
  onClick,
  icon,
  iconSize = 12,
  className,
}: Props) {
  return (
    <div className={classNames("SelectButton", className)} onClick={onClick}>
      {children}
      <div className="SelectButton__iconWrapper">
        <Icon size={iconSize} variant={icon} />
      </div>
    </div>
  );
}

export default React.memo(SelectButton);
