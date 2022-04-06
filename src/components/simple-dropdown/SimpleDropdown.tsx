import React, { ReactNode, useEffect, useRef, useState } from "react";
import { IconChevronDown } from "../../icons";
import { ClickOutside, useDimensions } from "../../utils";
import { IconRotator } from "../icon-rotator";
import { MenuListItem } from "../menu-list-item";
import { Popover } from "../popover";
import { SSimpleDropdown } from "./styles/SSimpleDropdown";
import { SSimpleDropdownPlaceholder } from "./styles/SSimpleDropdownPlaceholder";
import { SSimpleDropdownPopup } from "./styles/SSimpleDropdownPopup";
import { SSimpleDropdownPopupIcon } from "./styles/SSimpleDropdownPopupIcon";
import { SSimpleDropdownTitleAndIcon } from "./styles/SSimpleDropdownTitleAndIcon";

export interface IDataSourceItem {
  title: string;
  key: string;
  data?: any;
  iconOrFlag?: ReactNode;
}

export interface ISimpleDropdown {
  dataSource: IDataSourceItem[];
  renderItem?: (data: any) => React.ReactNode;
  onSelectValue?: (option: IDataSourceItem) => void;
  initialValue?: IDataSourceItem;
  placeholder?: string;
  onClose?: () => void;
  onClick?: () => void;
  opened?: boolean;
}

export const SimpleDropdown: React.FC<ISimpleDropdown> = ({
  dataSource,
  renderItem,
  onSelectValue,
  initialValue,
  placeholder,
  onClick,
  onClose,
  opened,
}) => {
  const [selectedOption, setSelectedOption] = useState<IDataSourceItem | null | undefined>();
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const ref = useRef(null);
  const { width } = useDimensions(ref);

  useEffect(() => {
    setDropdownOpened(!!opened);
  }, [opened]);

  useEffect(() => {
    setSelectedOption(initialValue);
  }, [initialValue]);

  useEffect(() => {
    dropdownOpened ? setRotationDegrees(-180) : setRotationDegrees(0);
  }, [dropdownOpened]);

  const handleOnClick = () => {
    onClick?.();
    setDropdownOpened((prevState) => !prevState);
  };

  const handleOnOptionClick = (option) => {
    onSelectValue?.(option);
    setSelectedOption(option);
  };

  const closeDropDown = () => {
    onClose?.();
    setDropdownOpened(false);
  };
  return (
    <ClickOutside onClickOutside={closeDropDown}>
      <div>
        <SSimpleDropdown onClick={handleOnClick} ref={ref} active={dropdownOpened}>
          <SSimpleDropdownTitleAndIcon>
            {selectedOption?.iconOrFlag && (
              <SSimpleDropdownPopupIcon>{selectedOption.iconOrFlag}</SSimpleDropdownPopupIcon>
            )}
            {selectedOption ? (
              <p>{selectedOption.title}</p>
            ) : (
              <SSimpleDropdownPlaceholder>{placeholder}</SSimpleDropdownPlaceholder>
            )}
          </SSimpleDropdownTitleAndIcon>
          <IconRotator rotationDegrees={rotationDegrees}>
            <IconChevronDown size={16} />
          </IconRotator>
        </SSimpleDropdown>
        {dropdownOpened && (
          <Popover disableTriangle placement="bottom" reference={ref}>
            <SSimpleDropdownPopup popupWidth={width}>
              <div>
                {dataSource.map((option, index) => (
                  <div
                    key={option.key}
                    onClick={() => {
                      handleOnOptionClick(option);
                    }}
                  >
                    {renderItem ? (
                      renderItem(option)
                    ) : (
                      <MenuListItem size="small" isLast={index + 1 === dataSource.length}>
                        {option.iconOrFlag && <SSimpleDropdownPopupIcon>{option.iconOrFlag}</SSimpleDropdownPopupIcon>}
                        <p>{option.title}</p>
                      </MenuListItem>
                    )}
                  </div>
                ))}
              </div>
            </SSimpleDropdownPopup>
          </Popover>
        )}
      </div>
    </ClickOutside>
  );
};
