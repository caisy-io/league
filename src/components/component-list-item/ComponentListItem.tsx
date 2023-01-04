import React, { FC, useState } from "react";
import { IconCheckmarkOutlined } from "../../icons";
import { Img } from "../../base-components/img";
import { IconCheckmarkSolid } from "../../icons/IconCheckmarkSolid";
import { IconCircle } from "../../icons/IconCircle";
import { IconTags } from "../../icons/IconTags";
import { ComponentImage } from "../component-image";
import { SComponentListItem } from "./styles/SComponentListItem";
import { SComponentListItemCheckboxWrapper } from "./styles/SComponentListItemCheckboxWrapper";
import { SComponentListItemChildren } from "./styles/SComponentListItemChildren";
import { SComponentListItemContent } from "./styles/SComponentListItemContent";
import { SComponentListItemDescription } from "./styles/SComponentListItemDescription";
import { SComponentListItemImageWrapper } from "./styles/SComponentListItemImageWrapper";
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
  imageSrc?: string;
  children?: React.ReactNode;
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
  imageSrc,
}) => {
  const handleSelect = (e) => {
    e.stopPropagation();
    onSelect?.(!selected);
  };
  const [hoveringCheckmark, setHoveringCheckmark] = useState(false);
  return (
    <SComponentListItem onClick={onClick}>
      <SComponentListItemImageWrapper>
        <ComponentImage image={imageSrc && <Img lazyload={false} src={imageSrc} resolution={48} />} type="list-item" />
      </SComponentListItemImageWrapper>
      {selectable && (
        <SComponentListItemCheckboxWrapper
          onMouseEnter={() => setHoveringCheckmark(true)}
          onMouseLeave={() => setHoveringCheckmark(false)}
          selected={selected}
          hover={hoveringCheckmark}
          onClick={handleSelect}
        >
          {hoveringCheckmark ? (
            <IconCheckmarkOutlined />
          ) : selected ? (
            <IconCheckmarkSolid size={24} />
          ) : (
            <IconCircle size={24} />
          )}
        </SComponentListItemCheckboxWrapper>
      )}
      <SComponentListItemContent>
        <SComponentListItemChildren selected={selected}>{children}</SComponentListItemChildren>
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
