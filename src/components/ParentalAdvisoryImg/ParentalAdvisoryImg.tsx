import React from "react";
import explicitImg from "../../assets/explicit-content-warning.png";

import "./ParentalAdvisoryImg.css";

export const ParentalAdvisoryImg = () => {
  return (
    <img
      src={explicitImg}
      alt="Explicit Content Warning"
      className="parental-advisory-img"
    />
  );
};
