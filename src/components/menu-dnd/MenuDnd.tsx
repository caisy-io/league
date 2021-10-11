import React from "react";
import MenuDndListItem from "./menu-dnd-list-item/MenuDndListItem";
interface IMenuDnd {
  onDrop: (fromIndex: number, toIndex: number) => void;
}

const WrappedMenuDnd: React.FC<IMenuDnd> = ({ ...props }) => {
  return (
    <ul>
      <>
        {React.Children.map(
          props.children,
          (child, index: number) =>
            React.isValidElement(child) && (
              <MenuDndListItem onDrop={props.onDrop} id={index} index={index} key={index}>
                {child}
              </MenuDndListItem>
            ),
        )}
      </>
    </ul>
  );
};

export const MenuDnd: React.FC<IMenuDnd> = ({ ...props }) => {
  return <WrappedMenuDnd {...props}>{props.children}</WrappedMenuDnd>;
};
