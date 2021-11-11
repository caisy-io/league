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

type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success" | "hover" | "activated";

interface IUploadMenuItem {
  onClick: () => void;
  state?: TUploadMenuItemStatus;
  percentageLoaded?: number;
}

export const UploadMenuItem: React.FC<IUploadMenuItem> = ({ ...props }) => {
  const [hovering, setHovering] = React.useState(false);
  const [activated, setActivated] = React.useState(false);

  const percentageLoaded = props.percentageLoaded ? (props.percentageLoaded < 100 ? props.percentageLoaded : 100) : 0;

  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  React.useEffect(() => {
    setHovering(props.state === "hover");
    setActivated(props.state === "activated");
  }, [props.state]);

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
    <SUploadMenuItemWrapper
      hovering={hovering}
      activated={activated}
      isDefault={!props.state || props.state === "default"}
    >
      <SUploadMenuItem
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setActivated(false);
        }}
        onMouseDown={() => setActivated(true)}
        onMouseUp={() => setActivated(false)}
        state={props.state}
        onClick={handleClick}
      >
        {renderIcon()}
      </SUploadMenuItem>
      <SUploadMenuItemLabel state={props.state}>{renderLabelText()}</SUploadMenuItemLabel>
    </SUploadMenuItemWrapper>
  );
};
