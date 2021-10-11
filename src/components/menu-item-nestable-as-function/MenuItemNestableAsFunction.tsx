import React, { useState } from "react";
import { IconAngleDown } from "../../icons/IconAngleDown";
import { IconAngleRight } from "../../icons/IconAngleRight";
import { IconFolder } from "../../icons/IconFolder";
import { SMenuItemContent } from "./styles/SMenuItemContent";
import { SMenuItemIcon } from "./styles/SMenuItemIcon";
import { SIconArrow } from "./styles/SIconArrow";
import { SMenuItemNestable } from "./styles/SMenuItemNestable";
import { SMenuItemNestableChildWrapper } from "./styles/SMenuItemNestableChildWrapper";

type MenuItemTag = "a" | "div" | "li" | "span" | "ul";

export interface IMenuItemNestableAsFunction {
  active?: boolean;
  collapsed?: boolean;
  onClick?: (e: any) => void;
  as?: MenuItemTag;
  childWrapperAs?: MenuItemTag;
}

const childrenContainMenuItems = (c: any) => {
  let truthy = false;
  if (c?.type?.render?.name?.toString().includes("renderMenuItemNestableAsFunction")) {
    return true;
  }

  c?.props?.children &&
    React.Children.forEach(c.props.children, (child: any) => {
      if (
        child?.type?.render?.name?.toString().includes("renderMenuItemNestableAsFunction") ||
        (child?.props?.children && childrenContainMenuItems(child.props.children)) ||
        child?.type?.displayName === "MenuItemNestableAsFunction"
      ) {
        truthy = true;
      }
    });

  return truthy;
};

// We wrap this with forwardRef to make it usable for example inside the next.js router
const MenuItemNestableAsFunction: React.FC<IMenuItemNestableAsFunction> = React.forwardRef(
  function renderMenuItemNestableAsFunction({ children, childWrapperAs, as = "div", active, ...props }, ref) {
    const [collapsed, setCollapsed] = useState<boolean>(
      typeof props.collapsed === "undefined" ? true : props.collapsed,
    );

    const childMenuItems: any[] = [];
    const anyOtherChild: any[] = [];

    React.Children.forEach(children, (child: any) => {
      if (childrenContainMenuItems(child)) {
        childMenuItems.push(child);
      } else {
        anyOtherChild.push(child);
      }
    });

    const hasChildMenuItems = childMenuItems && childMenuItems.length > 0;

    const onClick = (e) => {
      hasChildMenuItems && setCollapsed(!collapsed);
      props.onClick && props.onClick(e);
    };
    return (
      <>
        <SMenuItemNestable ref={ref} active={active} collapsed={collapsed} onClick={onClick} as={as as any as never}>
          <>
            <SIconArrow active={active}>
              {hasChildMenuItems && (collapsed ? <IconAngleRight /> : <IconAngleDown />)}
            </SIconArrow>
            <SMenuItemContent>
              <SMenuItemIcon>{hasChildMenuItems ? <IconFolder /> : undefined}</SMenuItemIcon>
              {anyOtherChild}
            </SMenuItemContent>
          </>
        </SMenuItemNestable>
        {hasChildMenuItems && (
          <SMenuItemNestableChildWrapper collapsed={collapsed} as={childWrapperAs as any as never}>
            {childMenuItems}
          </SMenuItemNestableChildWrapper>
        )}
      </>
    );
  },
);

MenuItemNestableAsFunction.displayName = "MenuItemNestableAsFunction";

export { MenuItemNestableAsFunction };
