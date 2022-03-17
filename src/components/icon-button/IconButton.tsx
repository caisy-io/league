import { FC, forwardRef, MouseEvent } from "react";
import { ISizesSmallMedium } from "../../interfaces";
import { SIconButton } from "./styles/SIconButton";

interface IIconButton {
  size?: ISizesSmallMedium;
  type?: "primary" | "secondary" | "danger" | "default";
  activated?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const IconButton: FC<IIconButton> = forwardRef(({ children, size, type, activated, onClick }, ref: any) => {
  return (
    <SIconButton ref={ref} onClick={onClick} activated={activated} size={size} type={type}>
      {children}
    </SIconButton>
  );
});
