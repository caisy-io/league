import React, { FC } from "react";
import { IconTags } from "../../icons/IconTags";
import { SComponentListItem } from "./styles/SComponentListItem";
import { SComponentListItemCheckboxWrapper } from "./styles/SComponentListItemCheckboxWrapper";
import { SComponentListItemChildren } from "./styles/SComponentListItemChildren";
import { SComponentListItemContent } from "./styles/SComponentListItemContent";
import { SComponentListItemDescription } from "./styles/SComponentListItemDescription";
import { SComponentListItemTag } from "./styles/SComponentListItemTag";
import { SComponentListItemTagIconWrapper } from "./styles/SComponentListItemTagIconWrapper";
import { SComponentListItemTags } from "./styles/SComponentListItemTags";

interface IComponentListItemTag {
  name: string;
  id: number | string;
}

interface IComponentListItemBasic {
  description?: string;
  tags?: IComponentListItemTag[];
  onClick?: () => void;
}

interface IComponentListItemWithoutMultiselect extends IComponentListItemBasic {
  selectable?: false;
  selected?: never;
  onSelect?: never;
}

interface IComponentListItemWithMultiselect extends IComponentListItemBasic {
  selectable: true;
  selected: boolean;
  onSelect: (newSelectedState: boolean) => void;
}

type IComponentListItem = IComponentListItemWithoutMultiselect | IComponentListItemWithMultiselect;

export const ComponentListItem: FC<IComponentListItem> = ({
  children,
  description,
  tags,
  onClick,
  selectable,
  selected,
  onSelect,
}) => {
  return (
    <SComponentListItem onClick={onClick}>
      {/* @TODO Placeholder of ComponentImage */}
      <div style={{ minWidth: 92, minHeight: 92, backgroundColor: "red", borderRadius: 8 }} />
      {selectable && (
        <SComponentListItemCheckboxWrapper>
          {/* @TODO Placeholder of Checkbox */}
          <div style={{ width: 18, height: 18, borderRadius: "50%", backgroundColor: "red" }} />
        </SComponentListItemCheckboxWrapper>
      )}
      <SComponentListItemContent>
        <SComponentListItemChildren>{children}</SComponentListItemChildren>
        <SComponentListItemDescription>{description}</SComponentListItemDescription>
        {tags && tags.length > 0 && (
          <SComponentListItemTags>
            <SComponentListItemTagIconWrapper>
              <IconTags />
            </SComponentListItemTagIconWrapper>
            {tags?.map((tag, index) => (
              <SComponentListItemTag key={tag.id}>
                {tag.name}
                {index + 1 !== tags.length && <>,&nbsp;</>}
              </SComponentListItemTag>
            ))}
          </SComponentListItemTags>
        )}
      </SComponentListItemContent>
    </SComponentListItem>
  );
};
