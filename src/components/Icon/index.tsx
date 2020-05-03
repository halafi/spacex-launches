import React from "react";
import refresh from "../../assets/icon/refresh.png";
import refresh2x from "../../assets/icon/refresh@2x.png";
import refresh3x from "../../assets/icon/refresh@3x.png";
import select from "../../assets/icon/select.png";
import select2x from "../../assets/icon/select@2x.png";
import select3x from "../../assets/icon/select@3x.png";
import sort from "../../assets/icon/sort.png";
import sort2x from "../../assets/icon/sort@2x.png";
import sort3x from "../../assets/icon/sort@3x.png";

export type IconVariant = "refresh" | "select" | "sort";
type Props = {
  variant: IconVariant;
  size: number;
  className?: string;
};

// I don't like this
const getImage = (variant: IconVariant, size?: number) => {
  if (variant === "refresh") {
    if (size === 2) {
      return refresh2x;
    }
    if (size === 3) {
      return refresh3x;
    }
    return refresh;
  } else if (variant === "sort") {
    if (size === 2) {
      return sort2x;
    }
    if (size === 3) {
      return sort3x;
    }
    return sort;
  } else if (variant === "select") {
    if (size === 2) {
      return select2x;
    }
    if (size === 3) {
      return select3x;
    }
    return select;
  }
};

function Icon({ variant, size, className }: Props) {
  return (
    <img
      className={className}
      width={size}
      src={getImage(variant)}
      srcSet={`${getImage(variant, 2)} 2x, ${getImage(variant, 3)} 3x`}
      alt={`${variant} icon`}
    />
  );
}

export default Icon;
