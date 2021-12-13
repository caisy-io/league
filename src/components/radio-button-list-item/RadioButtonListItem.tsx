import React, { FC, useState } from "react";
import { IconCircle } from "../..";
import { SRadioButtonListItem } from "./styles/SRadioButtonListItem";
import { SRadioButtonListItemCircle } from "./styles/SRadioButtonListItemCircle";

interface IRadioButtonListItem {
  activated?: boolean;
  disabled?: boolean;
  onChange: (newValue: boolean) => void;
}

export const RadioButtonListItem: FC<IRadioButtonListItem> = ({ activated, disabled, children, onChange }) => {
  const [hover, setHover] = useState(false);

  const renderIcon = () => {
    if (disabled) {
      return <IconCircle size={20} />;
    }

    if (activated) {
      // Placeholder for @TODO Checkmark
      return <IconCircle size={20} />;
    }

    if (hover) {
      // Placeholder for @TODO Checkmark
      return <IconCircle size={20} />;
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
      <SRadioButtonListItemCircle activated={activated} hover={hover} disabled={disabled}>
        {renderIcon()}
      </SRadioButtonListItemCircle>
    </SRadioButtonListItem>
  );
};
