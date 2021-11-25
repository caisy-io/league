import React from "react";
import { SBadge } from "./styles/SBadge";
import { SBadgeIconContent } from "./styles/SBadgeIconContent";
import { SBadgeIcon } from "./styles/SBadgeIcon";
import { EBadgePosition } from "./EBadgePosition";

type IBadgeType = "regular" | "important" | "white" | "dark" | "color";

export interface IBadge {
  value: string;
  position: EBadgePosition;
  disabled?: boolean;
  type: IBadgeType;
}

export const Badge: React.FC<IBadge> = ({ ...props }) => {
  const badgeRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  const resizeInput = () => {
    if (badgeRef.current) {
      badgeRef.current.innerText = props.value;

      let width = badgeRef.current.scrollWidth;

      setHeight(width + 1);
    }
  };

  React.useEffect(() => {
    resizeInput();
  }, [props.value]);

  return (
    <SBadge>
      <SBadgeIcon disabled={props.disabled} position={props.position} height={height}>
        <div ref={badgeRef} style={{ width: "fit-content", visibility: "hidden", position: "absolute", fontSize: 9 }} />
        <SBadgeIconContent>{props.value}</SBadgeIconContent>
      </SBadgeIcon>
      {props.children}
    </SBadge>
  );
};
