import React from "react";
import refresh from "../../assets/icon/refresh.png";
import refresh2x from "../../assets/icon/refresh@2x.png";
import refresh3x from "../../assets/icon/refresh@3x.png";

type Props = {
  variant: "refresh";
  size: number;
  className?: string;
};

function Icon({ variant, size, className }: Props) {
  const img = refresh;
  const img2x = refresh2x;
  const img3x = refresh3x;
  return (
    <img
      className={className}
      width={size}
      height={size}
      src={img}
      srcSet={`${img2x} 2x, ${img3x} 3x`}
      alt={`${variant} icon`}
    />
  );
}

export default Icon;
