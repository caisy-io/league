import React, { ReactComponentElement, ReactNode, useEffect, useState } from "react";
import { STabs } from "./styles/STabs";
import { STabsItemBorder } from "./styles/STabsItemBorder";
import { STabsItem } from "./styles/STabsItem";
import { STabPanel } from "./styles/STabPanel";

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
            <STabsItem
              selected={index === selected}
              key={index}
              onClick={() => {
                setSelected(index);
                props.onChange && props.onChange(index);
              }}
            >
              {child && child.props.title ? child.props.title : null}
              {index === selected && <STabsItemBorder />}
            </STabsItem>
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
}

export const TabPanel: React.FC<ITabPanel> = ({ ...props }) => {
  return <STabPanel {...props}>{props.children}</STabPanel>;
};
