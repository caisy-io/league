import React from "react";
import { EmptyGrid } from "./EmptyGrid";
import { AssetImageCardSkeleton } from "../asset-image-card-skeleton/AssetImageCardSkeleton";

function EmptyDemo({ ...args }) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <EmptyGrid {...args}>
        <div style={{ padding: "16px" }}>
          <div style={{ height: "180px", width: "250px" }}>
            <AssetImageCardSkeleton disableAnimation={true} />
          </div>
        </div>
      </EmptyGrid>
    </div>
  );
}

export default {
  title: "Components/Empty/Grid",
  component: EmptyDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=651%3A9238",
    },
  },
};
const Template = (args) => <EmptyDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "No results for your request",
  description: "Try to use different search request",
};
