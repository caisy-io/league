import React from "react";
import { IconPublish, IconUnpublish } from "../../icons";
import { SReleaseActionIndicator } from "./styles/SReleaseActionIndicator";

export type IReleaseAction = "PUBLISH" | "UNPUBLISH";

interface IReleaseActionIndicator {
  action?: IReleaseAction;
}

export const ReleaseActionIndicator: React.FC<IReleaseActionIndicator> = ({ ...props }) => {
  return (
    <SReleaseActionIndicator action={props.action}>
      {props.action === "PUBLISH" ? <IconPublish /> : <IconUnpublish />} {props.children}
    </SReleaseActionIndicator>
  );
};
