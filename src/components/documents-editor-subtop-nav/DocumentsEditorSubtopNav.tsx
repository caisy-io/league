import React from "react";
import { LineTab } from "../line-tab";
import { IconChevronDown, IconCross, IconOpenSidebarMenu } from "../../icons";
import { SDocumentsEditorSubtopNav } from "./styles/SDocumentsEditorSubtopNav";
import { SDocumentsEditorSubtopNavDocStructure } from "./styles/SDocumentsEditorSubtopNavDocStructure";
import { SDocumentsEditorSubtopNavIconWrapper } from "./styles/SDocumentsEditorSubtopNavIconWrapper";
import { SDocumentsEditorSubtopNavTab } from "./styles/SDocumentsEditorSubtopNavTab";
import { SDocumentsEditorSubtopNavTabsContainer } from "./styles/SDocumentsEditorSubtopNavTabsContainer";
import { SDocumentsEditorSubtopNavView } from "./styles/SDocumentsEditorSubtopNavView";

interface IDocumentsEditorSubtopNav {
  documentStructureOpened?: boolean;
  onOpenDocumentStructure?: (newValue: boolean) => void;
  blocks: { name: string; id?: string | number }[];
  selectedBlock: string | number;
  onSelectBlock: (block: string | number) => void;
  onViewClick?: () => void;
}

export const DocumentsEditorSubtopNav: React.FC<IDocumentsEditorSubtopNav> = ({
  documentStructureOpened,
  onOpenDocumentStructure,
  blocks,
  selectedBlock,
  onSelectBlock,
  onViewClick,
}) => {
  return (
    <SDocumentsEditorSubtopNav>
      <SDocumentsEditorSubtopNavDocStructure documentStructureOpened={documentStructureOpened}>
        <SDocumentsEditorSubtopNavIconWrapper onClick={() => onOpenDocumentStructure?.(!documentStructureOpened)}>
          {documentStructureOpened ? <IconCross size={20} /> : <IconOpenSidebarMenu />}
        </SDocumentsEditorSubtopNavIconWrapper>
        {documentStructureOpened && "Document structure"}
      </SDocumentsEditorSubtopNavDocStructure>
      <SDocumentsEditorSubtopNavTabsContainer>
        {blocks.map((block) => (
          <SDocumentsEditorSubtopNavTab>
            <LineTab activated={selectedBlock === block.name} onClick={() => onSelectBlock(block.name)}>
              {block.name}
            </LineTab>
          </SDocumentsEditorSubtopNavTab>
        ))}
      </SDocumentsEditorSubtopNavTabsContainer>
      <SDocumentsEditorSubtopNavView onClick={onViewClick}>
        View
        <IconChevronDown size={16} />
      </SDocumentsEditorSubtopNavView>
    </SDocumentsEditorSubtopNav>
  );
};
