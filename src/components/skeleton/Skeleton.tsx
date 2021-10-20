import React from "react";
import { SSkeleton } from "./styles/SSkeleton";

export const Skeleton: React.FC = () => {
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
