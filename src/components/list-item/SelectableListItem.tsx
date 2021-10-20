import React from "react";
import { SSelectableListItem } from "./styles/SSelectableListItem";
import { SListItemTitle } from "./styles/SListItemTitle";
import { SListItemDescription } from "./styles/SListItemDescription";
import { SListItemAvatar } from "./styles/SListItemAvatar";
import { SListItemContentWrapper } from "./styles/SListItemContentWrapper";
import { SSelectableListItemCheckbox } from "./styles/SSelectableListItemCheckbox";
import { IconCheckmark } from "../../icons/IconCheckmark";
import { Divider } from "../../components/divider/Divider";

interface ISelectableListItem {
  title: React.ReactNode;
  description: React.ReactNode;
  avatar?: string;
  selected: boolean;
  onSelect: () => void;
  onUnselect: () => void;
}

export const SelectableListItem: React.FC<ISelectableListItem> = ({ ...props }) => {
  const [hovering, setHovering] = React.useState(false);

  const onClick = () => {
    if (props.selected) {
      props.onUnselect();
    } else {
      props.onSelect();
    }
  };

  return (
    <>
      <SSelectableListItem
        selected={props.selected}
        onClick={onClick}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <SSelectableListItemCheckbox selected={props.selected} hovering={hovering}>
          {props.selected && <IconCheckmark />}
        </SSelectableListItemCheckbox>
        {props.avatar && <SListItemAvatar selected={props.selected} hovering={hovering} src={props.avatar} />}
        <SListItemContentWrapper>
          <SListItemTitle selected={props.selected} hovering={hovering}>
            {props.title}
          </SListItemTitle>
          <SListItemDescription selected={props.selected} hovering={hovering}>
            {props.description}
          </SListItemDescription>
        </SListItemContentWrapper>
      </SSelectableListItem>
      <Divider marginTop={8} marginBottom={8} />
    </>
  );
};
