import { SUploadMenuItem } from "./styles/SUploadMenuItem";
import React from "react";
import UploadIcon from "./icons/UploadIcon";
import LoadingIcon from "./icons/LoadingIcon";
import SuccessIcon from "./icons/SuccessIcon";
import { SUploadMenuItemLabel } from "./styles/SUploadMenuItemLabel";
import { SUploadMenuItemWrapper } from "./styles/SUploadMenuItemWrapper";

type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success";

interface IUploadMenuItem {
  onClick: () => void;
  state?: TUploadMenuItemStatus;
  percentageLoaded?: number;
}

export const UploadMenuItem: React.FC<IUploadMenuItem> = ({ ...props }) => {
  const [hovering, setHovering] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  const renderIcon = () => {
    switch (props.state) {
      case "dragging":
      case "loading":
        return <LoadingIcon />;
      case "success":
        return <SuccessIcon />;
      default:
        return <UploadIcon />;
    }
  };

  const renderLabelText = () => {
    switch (props.state) {
      case "loading":
        return props.percentageLoaded ? `${props.percentageLoaded}%` : "Loading...";
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
