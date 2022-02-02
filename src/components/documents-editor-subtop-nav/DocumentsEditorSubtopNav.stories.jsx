import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DocumentsEditorSubtopNav } from "./DocumentsEditorSubtopNav";

export default {
  title: `Components/Navigation/DocumentsEditorSubtopNav`,
  component: DocumentsEditorSubtopNavDemo,
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=384%3A5765",
    },
  },
};

function DocumentsEditorSubtopNavDemo(args) {
  const [blocks, setBlocks] = useState(
    args.blocks.map((block) => ({
      name: block,
    })),
  );

  useEffect(() => {
    setBlocks(
      args.blocks.map((block) => ({
        name: block,
      })),
    );
  }, [args.blocks]);

  const [selectedBlock, setSelectedBlock] = useState(null);

  const [documentStructureOpened, setDocumentStructureOpened] = useState(false);

  useEffect(() => {
    setDocumentStructureOpened(args.documentStructureOpened);
  }, [args.documentStructureOpened]);

  const handleViewClick = () => {
    window.alert("Clicked on View");
  };

  return (
    <div style={{ maxWidth: 900 }}>
      <DocumentsEditorSubtopNav
        documentStructureOpened={documentStructureOpened}
        onOpenDocumentStructure={setDocumentStructureOpened}
        selectedBlock={selectedBlock}
        onSelectBlock={setSelectedBlock}
        blocks={blocks}
        onViewClick={handleViewClick}
      />
    </div>
  );
}

const Template = (args) => <DocumentsEditorSubtopNavDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  blocks: ["Block A", "Block B", "Block C"],
  documentStructureOpened: false,
};
