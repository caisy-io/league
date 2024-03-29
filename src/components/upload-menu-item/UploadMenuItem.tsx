import React from "react";
import { css } from "styled-components";
import { IconCheckmarkSolid, IconUpload } from "../../icons";
import { Badge } from "../badge/Badge";
import { EBadgePosition } from "../badge/EBadgePosition";
import { SBadgeIcon } from "../badge/styles/SBadgeIcon";
import LoadingBorderIcon from "./icons/LoadingBorderIcon";
import { SLoadingBorderWrapper } from "./styles/SLoadingBorderWrapper";
import { SLoadingIconWrapper } from "./styles/SLoadingIconWrapper";
import { SUploadMenuItem } from "./styles/SUploadMenuItem";
import { SUploadMenuItemWrapper } from "./styles/SUploadMenuItemWrapper";

type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success" | "hover" | "activated";

interface IUploadMenuItem {
  onClick: () => void;
  state?: TUploadMenuItemStatus;
  percentageLoaded?: number;
  itemCount?: number;
  children?: React.ReactNode;
}

export const UploadMenuItem: React.FC<IUploadMenuItem> = ({
  state,
  percentageLoaded,
  itemCount,
  onClick,
}) => {
  const loadingPercentage = percentageLoaded ? (percentageLoaded < 100 ? percentageLoaded : 100) : 0;

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  const SDraggingBadge = css`
    ${SBadgeIcon} {
      background-color: var(--ui-supportive-06);
    }
  `;
  const SLoadingBadge = css`
    ${SBadgeIcon} {
      background-color: var(--icon-07);
    }
  `;

  return (
    <SUploadMenuItemWrapper
      activated={state === "activated"}
      isDefault={!state || state === "default"}
      state={state}
      onClick={handleClick}
    >
      <SUploadMenuItem state={state}>
        {state == "dragging" && itemCount && (
          <Badge
            size={"small"}
            value={`${itemCount}`}
            styleOverwrite={SDraggingBadge}
            position={EBadgePosition.Center}
            type={"important"}
          ></Badge>
        )}
        {(state == "default" || state == "activated") && <IconUpload />}
        {state == "default" || (state == "dragging" && !itemCount && <IconUpload />)}
        {state == "success" && <IconCheckmarkSolid size={20} />}
        {state == "loading" && (
          <SLoadingIconWrapper>
            <SLoadingBorderWrapper percentageLoaded={loadingPercentage}>
              <LoadingBorderIcon />
            </SLoadingBorderWrapper>
            <Badge
              size={"small"}
              value={`${itemCount}`}
              styleOverwrite={SLoadingBadge}
              position={EBadgePosition.Center}
              type={"important"}
            ></Badge>
          </SLoadingIconWrapper>
        )}
      </SUploadMenuItem>
    </SUploadMenuItemWrapper>
  );
};
