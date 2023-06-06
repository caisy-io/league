import React, { FC, ReactNode } from "react";
import { SErrorScreen } from "./styles/SErrorScreen";
import { SErrorScreenHeadline } from "./styles/SErrorScreenHeadline";
import { SErrorScreenPreview } from "./styles/SErrorScreenPreview";
import { SErrorScreenDescription } from "./styles/SErrorScreenDescription";
import { SErrorScreenCallToAction } from "./styles/SErrorScreenCallToAction";
import { SErrorScreenPreviewBorder } from "./styles/SErrorScreenPreviewBorder";
import { IconDottedBorder } from "../../icons/IconDottedBorder";

export interface IErrorScreen {
  preview: ReactNode;
  headline: ReactNode;
  description: ReactNode;
  callToAction: ReactNode;
}

export const ErrorScreen: FC<IErrorScreen> = ({ callToAction, description, headline, preview }) => {
  return (
    <SErrorScreen>
      {preview && (
        <SErrorScreenPreviewBorder>
          <IconDottedBorder />
          <SErrorScreenPreview>{preview}</SErrorScreenPreview>
        </SErrorScreenPreviewBorder>
      )}
      {headline && <SErrorScreenHeadline>{headline}</SErrorScreenHeadline>}
      {description && <SErrorScreenDescription>{description}</SErrorScreenDescription>}
      {callToAction && <SErrorScreenCallToAction>{callToAction}</SErrorScreenCallToAction>}
    </SErrorScreen>
  );
};
