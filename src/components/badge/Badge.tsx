import React from "react";
import { EBadgePosition } from "./EBadgePosition";
import { SBadge } from "./styles/SBadge";
import { SBadgeIcon } from "./styles/SBadgeIcon";
import { SBadgeIconContent } from "./styles/SBadgeIconContent";

export type IBadgeType = "regular" | "important" | "white" | "dark" | "color";
export type IBadgeSizeType = "micro" | "small" | "medium";

export interface IBadgeProps {
  value: string;
  position: EBadgePosition;
  disabled?: boolean;
  type: IBadgeType;
  size?: IBadgeSizeType;
}

export const Badge: React.FC<IBadgeProps> = ({ children, ...props }) => {
  const badgeRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  const resizeInput = () => {
    if (badgeRef.current) {
      badgeRef.current.innerText = props.value;
      let width = badgeRef.current.scrollWidth;
      if (props.type === "color") {
        if (props.size == "micro") {
          setHeight(width - 2);
        } else if (props.size == "small") {
          setHeight(width + 3);
        } else if (props.size == "medium") {
          setHeight(width + 7);
        }
      } else if (props.size == "micro") {
        setHeight(width - 3);
      } else if (props.size == "small") {
        setHeight(width - 1);
      } else if (props.size == "medium") {
        setHeight(width + 2);
      }
    }
  };

  React.useEffect(() => {
    resizeInput();
  }, [props.value, props.size, props.type]);

  return (
    <SBadge>
      <SBadgeIcon height={height} {...props}>
        <div style={{ width: "fit-content", visibility: "hidden", position: "absolute" }} />
        <SBadgeIconContent ref={badgeRef} {...props}>{props.type !== "color" && props.value}</SBadgeIconContent>
      </SBadgeIcon>
      {children}
    </SBadge>
  );
};
