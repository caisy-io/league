import React from "react";
import { SSkeleton } from "./styles/SSkeleton";

interface ISkeleton {}

export const Skeleton: React.FC<ISkeleton> = ({ ...props }) => {
  return (
    <SSkeleton>
      <div />
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </SSkeleton>
  );
};
