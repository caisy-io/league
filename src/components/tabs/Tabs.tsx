import React, { ReactNode, useEffect, useState } from "react";
import { LineTabs } from "..";
import { STabPanel } from "./styles/STabPanel";
import { STabs } from "./styles/STabs";

interface ITabs {
  initialValue: number;
  onChange?: (newValue: number) => void;
  children?: any;
  loading?: boolean;
  loadingComponent?: ReactNode;
  reference?: any;
  style?: React.CSSProperties;
}

export const Tabs: React.FC<ITabs> = (props) => {
  const [selected, setSelected] = useState(props.initialValue);

  useEffect(() => {
    setSelected(props.initialValue);
    props.onChange && props.onChange(props.initialValue);
  }, [props.initialValue]);

  return (
    <STabs style={props.style} ref={props.reference}>
      <ul>
        {React.Children.map(props.children, (child: any, index: number) => {
          return (
            <LineTabs
              activated={index === selected}
              key={index}
              onClick={() => {
                setSelected(index);
                props.onChange && props.onChange(index);
              }}
            >
              {child && child.props.title ? child.props.title : null}
              {child.props.icon}
            </LineTabs>
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
    </STabs>
  );
};

interface ITabPanel {
  title?: any;
  children?: any;
  style?: React.CSSProperties;
  icon?: ReactNode;
}

export const TabPanel = (props: ITabPanel) => {
  return <STabPanel {...props}>{props.children}</STabPanel>;
};
