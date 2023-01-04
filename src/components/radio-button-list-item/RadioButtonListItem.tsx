import React, { FC, useState } from "react";
import { IconCheckmarkOutlined, IconCircle, IconCheckmarkSolid } from "../../icons";
import { SRadioButtonListItem } from "./styles/SRadioButtonListItem";
import { SRadioButtonListItemCircle } from "./styles/SRadioButtonListItemCircle";

interface IRadioButtonListItem {
  activated?: boolean;
  disabled?: boolean;
  onChange: (newValue: boolean) => void;
  left?: boolean;
  children?: React.ReactNode;
}

export const RadioButtonListItem: FC<IRadioButtonListItem> = ({ activated, disabled, children, onChange, left }) => {
  const [hover, setHover] = useState(false);

  const renderIcon = () => {
    if (disabled) {
      return <IconCircle size={20} />;
    }

    if (activated) {
      return <IconCheckmarkSolid size={20} />;
    }

    if (hover) {
      return <IconCheckmarkOutlined size={20} />;
    }

    return <IconCircle size={20} />;
  };

  return (
    <SRadioButtonListItem
      onClick={() => !disabled && onChange(!activated)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <SRadioButtonListItemCircle activated={activated} hover={hover} disabled={disabled} left={left}>
        {renderIcon()}
      </SRadioButtonListItemCircle>
    </SRadioButtonListItem>
  );
};
