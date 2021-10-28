import { SUploadMenuItem } from "./styles/SUploadMenuItem";
import React from "react";
import UploadIcon from "./icons/UploadIcon";
import LoadingIcon from "./icons/LoadingIcon";
import SuccessIcon from "./icons/SuccessIcon";
import { SUploadMenuItemLabel } from "./styles/SUploadMenuItemLabel";
import { SUploadMenuItemWrapper } from "./styles/SUploadMenuItemWrapper";
import LoadingBorderIcon from "./icons/LoadingBorderIcon";
import { SLoadingIconWrapper } from "./styles/SLoadingIconWrapper";
import { SLoadingBorderWrapper } from "./styles/SLoadingBorderWrapper";

type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success";

interface IUploadMenuItem {
  onClick: () => void;
  state?: TUploadMenuItemStatus;
  percentageLoaded?: number;
}

export const UploadMenuItem: React.FC<IUploadMenuItem> = ({ ...props }) => {
  const [hovering, setHovering] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const percentageLoaded = props.percentageLoaded ? (props.percentageLoaded < 100 ? props.percentageLoaded : 100) : 0;

  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  const renderIcon = () => {
    switch (props.state) {
      case "dragging":
        return <LoadingIcon />;
      case "loading":
        return (
          <SLoadingIconWrapper>
            <SLoadingBorderWrapper percentageLoaded={percentageLoaded}>
              <LoadingBorderIcon />
            </SLoadingBorderWrapper>
            <LoadingIcon />
          </SLoadingIconWrapper>
        );
      case "success":
        return <SuccessIcon />;
      default:
        return <UploadIcon />;
    }
  };

  const renderLabelText = () => {
    switch (props.state) {
      case "loading":
        return percentageLoaded ? `${percentageLoaded}%` : "Loading...";
      case "success":
        return "Done";
      default:
        return "Upload";
    }
  };

  return (
    <SUploadMenuItemWrapper hovering={hovering} active={active} isDefault={!props.state || props.state === "default"}>
      <SUploadMenuItem
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setActive(false);
        }}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        state={props.state}
        onClick={handleClick}
      >
        {renderIcon()}
      </SUploadMenuItem>
      <SUploadMenuItemLabel state={props.state}>{renderLabelText()}</SUploadMenuItemLabel>
    </SUploadMenuItemWrapper>
  );
};
