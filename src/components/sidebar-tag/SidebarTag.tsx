import React, { useEffect, useState } from "react";
import { SSidebarTag } from "./styles/SSidebarTag";

export interface ISidebarTag {
  left?: boolean;
  open?: boolean;
  onOpenChanged?: (boolean) => void;
  onClick?: () => void;
  style?: object;
}

export const SidebarTag: React.FC<ISidebarTag> = ({ left = true, open = true, onOpenChanged, ...props }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClick = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onOpenChanged && onOpenChanged(newIsOpen);
  };

  return (
    <SSidebarTag left={left} open={isOpen} onClick={handleClick} style={props.style}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="40" fill="none" viewBox="0 0 16 40">
        <g clipPath="url(#clip0_1732:116810)">
          <path
            fill="#fff"
            stroke="var(--ui-03)"
            d="M-.5 39.369V.63L9.718 3.035a7.5 7.5 0 015.782 7.301v19.328a7.5 7.5 0 01-5.782 7.3L-.5 39.37z"
          />
          <path
            className="sidebarTag__content__arrow"
            fill="#567A98"
            d="M5.248 20.832a1 1 0 010-1.664l3.197-2.131a1 1 0 011.555.832v4.262a1 1 0 01-1.555.832l-3.197-2.131z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1732:116810">
            <path fill="#fff" d="M0 0h8a8 8 0 018 8v24a8 8 0 01-8 8H0V0z" />
          </clipPath>
        </defs>
      </svg>
    </SSidebarTag>
  );
};
