import React, { FC, ReactNode } from "react";
import { SSuspendedOrg } from "./styles/SSuspendedOrg";
import { SSuspendedOrgHeadline } from "./styles/SSuspendedOrgHeadline";
import { SSuspendedOrgPreview } from "./styles/SSuspendedOrgPreview";
import { SSuspendedOrgDescription } from "./styles/SSuspendedOrgDescription";
import { SSuspendedOrgCallToAction } from "./styles/SSuspendedOrgCallToAction";
import { SSuspendedOrgPreviewBorder } from "./styles/SSuspendedOrgPreviewBorder";
import { IconDottedBorder } from "../../icons/IconDottedBorder";

export interface ISuspendedOrg {
  preview: ReactNode;
  headline: string;
  description: ReactNode;
  callToAction: ReactNode;
}

export const SuspendedOrg: FC<ISuspendedOrg> = ({ callToAction, description, headline, preview }) => {
  return (
    <SSuspendedOrg>
      {preview && (
        <SSuspendedOrgPreviewBorder>
          <IconDottedBorder />
          <SSuspendedOrgPreview>{preview}</SSuspendedOrgPreview>
        </SSuspendedOrgPreviewBorder>
      )}
      {headline && <SSuspendedOrgHeadline>{headline}</SSuspendedOrgHeadline>}
      {description && <SSuspendedOrgDescription>{description}</SSuspendedOrgDescription>}
      {callToAction && <SSuspendedOrgCallToAction>{callToAction}</SSuspendedOrgCallToAction>}
    </SSuspendedOrg>
  );
};
