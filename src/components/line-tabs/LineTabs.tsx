import React, { ReactNode, useEffect, useState } from "react";
import { LineTab } from "../line-tab";
import { SLineTabPanel } from "./styles/SLineTabPanel";
import { SLineTabs } from "./styles/SLineTabs";

interface ILineTabs {
  initialValue: number;
  onChange?: (newValue: number) => void;
  children?: ReactNode;
  loading?: boolean;
  loadingComponent?: ReactNode;
  reference?: any;
  style?: React.CSSProperties;
}

export const LineTabs: React.FC<ILineTabs> = (props) => {
  const [selected, setSelected] = useState(props.initialValue);

  useEffect(() => {
    setSelected(props.initialValue);
    props.onChange && props.onChange(props.initialValue);
  }, [props.initialValue]);

  return (
    <SLineTabs style={props.style} ref={props.reference}>
      <ul>
        {React.Children.map(props.children, (child: any, index: number) => {
          return (
            <LineTab
              activated={index === selected}
              key={index}
              onClick={() => {
                setSelected(index);
                props.onChange && props.onChange(index);
              }}
            >
              {child && child.props.title ? child.props.title : null}
              {child.props.icon}
            </LineTab>
          );
        })}
      </ul>
      {props.loading ? (
        props.loadingComponent ? (
          props.loadingComponent
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>{React.Children.map(props.children, (child, i) => (i === selected ? child : null))}</div>
      )}
    </SLineTabs>
  );
};

interface ILineTabPanel {
  title?: any;
  children?: any;
  style?: React.CSSProperties;
  icon?: ReactNode;
}

export const LineTabPanel = (props: ILineTabPanel) => {
  return <SLineTabPanel {...props}>{props.children}</SLineTabPanel>;
};
