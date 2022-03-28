import React, { ReactNode } from "react";
import { IconTags } from "../../icons";
import { ComponentImage } from "../component-image";
import { SComponentCard } from "./styles/SComponentCard";
import { SComponentCardDescription } from "./styles/SComponentCardDescription";
import { SComponentCardTitle } from "./styles/SComponentCardTitle";
import { STagContainer } from "./styles/STagContainer";
import { STagText } from "./styles/STagText";

interface IComponentCard {
  title?: string | undefined;
  description?: string | undefined;
  tags?: string | undefined;
  image?: ReactNode;
  onClick?: () => void;
}

export const ComponentCard: React.FC<IComponentCard> = ({ title, description, tags, image, onClick }) => {
  return (
    <SComponentCard onClick={onClick}>
      <div>
        <SComponentCardTitle>{title}</SComponentCardTitle>
        <SComponentCardDescription>{description}</SComponentCardDescription>
      </div>
      <div>
        <ComponentImage type="grid" image={image}></ComponentImage>
        <STagContainer>
          {tags ? <IconTags size={20}></IconTags> : null}
          <STagText>{tags}</STagText>
        </STagContainer>
      </div>
    </SComponentCard>
  );
};
