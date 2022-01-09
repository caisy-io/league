import React, { ReactNode, useEffect, useState } from "react";
import { STabBar } from "./styles/STabBar";
import { Tab } from "../tab/Tab";
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
    <div style={props.style} ref={props.reference}>
      <STabBar>
        {React.Children.map(props.children, (child: any, index: number) => {
          return (
            <Tab
              value={index}
              key={index}
              onClick={() => {
                setSelected(index);
                props.onChange && props.onChange(index);
              }}
              icon={child?.props?.icon}
              activated={index === selected}
            >
              {child && child.props.title ? child.props.title : null}
            </Tab>
          );
        })}
      </STabBar>
      {props.loading ? (
        props.loadingComponent ? (
          props.loadingComponent
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>{React.Children.map(props.children, (child, i) => (i === selected ? child : null))}</div>
      )}
    </div>
  );
};

interface ITabPanel {
  title?: any;
  icon?: any;
  children?: any;
}

export const TabPanel = (props: ITabPanel) => {
  return <div {...props}>{props.children}</div>;
};
