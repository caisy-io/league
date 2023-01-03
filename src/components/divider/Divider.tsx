import React from "react";
import { SDivider } from "./styles/SDivider";
import { SDividerInnerText } from "./styles/SDividerInnerText";

interface IDivider {
  orientation?: "left" | "right";
  dashed?: true;
  marginBottom?: number;
  marginTop?: number;
  width?: number;
  height?: number;
  style?: any;
  vertical?: boolean;
  children?: React.ReactNode;
}

export const Divider: React.FC<IDivider> = ({ ...props }) => {
  const hasText = props.children ? true : false;

  return (
    <SDivider
      {...props}
      dashed={props.dashed || false}
      orientation={props.orientation}
      marginBottom={props.marginBottom}
      marginTop={props.marginTop}
      hasText={hasText}
      vertical={props.vertical}
      width={props.width}
      height={props.height}
    >
      {hasText && <SDividerInnerText>{props.children}</SDividerInnerText>}
    </SDivider>
  );
};
