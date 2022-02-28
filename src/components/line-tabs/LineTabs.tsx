import React, {ReactNode, useEffect, useState} from "react";
import {LineTab} from "../line-tab";
import {SLineTabPanel} from "./styles/SLineTabPanel";
import {SLineTabs} from "./styles/SLineTabs";

interface ILineTabs {
  initialValue: number;
  onChange?: (newValue: number) => void;
  loading?: boolean;
  loadingComponent?: ReactNode;
  reference?: any;
  style?: React.CSSProperties;
  tabsStyle?: React.CSSProperties;
}

export const LineTabs: React.FC<ILineTabs> = ({
                                                children,
                                                initialValue,
                                                loading,
                                                loadingComponent,
                                                onChange,
                                                reference,
                                                style,
                                                tabsStyle
                                              }) => {
  const [selected, setSelected] = useState(initialValue);
  
  useEffect(() => {
    setSelected(initialValue);
    onChange?.(initialValue);
  }, [initialValue]);
  
  return (
    <SLineTabs style={style} ref={reference}>
      <ul style={tabsStyle}>
        {React.Children.map(children as React.ReactElement<ILineTabPanel>[], (child, index) => {
          return (
            <LineTab
              activated={index === selected}
              key={index}
              onClick={() => {
                setSelected(index);
                onChange?.(index);
              }}
            >
              {child?.props?.tabTitle}
              {child?.props?.icon}
            </LineTab>
          );
        })}
      </ul>
      {loading ? (
          loadingComponent ? (
            loadingComponent
          ) : (
            <div>Loading...</div>
          )
        ) :
        React.Children.map(children, (child, i) => (i === selected ? child : null))}
    </SLineTabs>
  );
};

interface ILineTabPanel {
  tabTitle: string;
  style?: React.CSSProperties;
  icon?: ReactNode;
}

export const LineTabPanel: React.FC<ILineTabPanel> = (props) => {
  return <SLineTabPanel {...props}>{props.children}</SLineTabPanel>;
};
