import React, {  AllHTMLAttributes, forwardRef } from "react";
import { SListItem } from "./styles/SListItem";
interface IListItem {
  activated?: boolean;
}

export const ListItem = forwardRef<HTMLDivElement, IListItem & AllHTMLAttributes<HTMLElement>>(
  ({ children, activated, ...props }, ref) => {
    return (
      <SListItem ref={ref} activated={activated} {...props}>
        {children}
      </SListItem>
    );
  },
);
