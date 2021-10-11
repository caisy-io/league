import React from "react";
import { SSpinner } from "./styles/SSpinner";
import { SSpinnerTopLeft } from "./styles/SSpinnerTopLeft";
import { SSpinnerBottomLeft } from "./styles/SSpinnerBottomLeft";
import { SSpinnerTopRight } from "./styles/SSpinnerTopRight";
import { SSpinnerBottomRight } from "./styles/SSpinnerBottomRight";

interface ISpinner {}

export const Spinner: React.FC<ISpinner> = ({ ...props }) => {
  return (
    <SSpinner>
      <SSpinnerTopLeft />
      <SSpinnerTopRight />
      <SSpinnerBottomLeft />
      <SSpinnerBottomRight />
    </SSpinner>
  );
};
