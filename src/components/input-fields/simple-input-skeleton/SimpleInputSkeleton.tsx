import React, { FC } from "react";
import { SSkeleton } from "../../skeleton";
import { Spacer } from "../../../base-components/spacer";

interface ISimpleInputSkeleton {
  multiline?: boolean;
}

const SimpleInputSkeleton: FC<ISimpleInputSkeleton> = ({ multiline }) => {
  return multiline ? (
    <>
      <SSkeleton borderRadius="4px" height="20px" width="90%" />
      <Spacer bronze={6} />
      <SSkeleton borderRadius="4px" height="20px" width="70%" />
    </>
  ) : (
    <SSkeleton borderRadius="4px" height="20px" width="90%" />
  );
};

export default SimpleInputSkeleton;
