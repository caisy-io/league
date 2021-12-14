import { useEffect } from "react";
import { useState } from "react";
import { ComponentListItem } from "./ComponentListItem";

function ComponentListItemDemo({ tags: argTags, description, content, selectable }) {
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
      <ComponentListItem selectable={selectable} tags={tags} description={description}>
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
};
