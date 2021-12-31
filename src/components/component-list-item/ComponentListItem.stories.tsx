import { useEffect } from "react";
import { useState } from "react";
import { ComponentListItem } from "./ComponentListItem";

function ComponentListItemDemo({ tags: argTags, description, content, selectable, imageSrc }) {
  const [selected, setSelected] = useState(false);
  const [tags, setTags] = useState(
    argTags.map((tag, index) => ({
      name: tag,
      id: `${tag}${index}`,
    })),
  );

  useEffect(() => {
    setTags(
      argTags.map((tag, index) => ({
        name: tag,
        id: `${tag}${index}`,
      })),
    );
  }, [argTags]);
  return (
    <div style={{ width: 385 }}>
      <ComponentListItem
        selected={selected}
        onSelect={setSelected}
        imageSrc={imageSrc}
        selectable={selectable}
        tags={tags}
        description={description}
      >
        {content}
      </ComponentListItem>
    </div>
  );
}

export default {
  title: "Components/BlueprintFlow/ComponentListItem",
  component: ComponentListItemDemo,
};
const Template = (args) => <ComponentListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Default",
  description: "Amet minim mollit non deserunt...",
  tags: ["Tag A", "Tag B", "Tag C"],
  selectable: false,
  imageSrc:
    "https://images.unsplash.com/photo-1597365657409-3295ffce315c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};
