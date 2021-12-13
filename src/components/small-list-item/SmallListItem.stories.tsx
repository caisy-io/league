import { SmallListItem } from "./SmallListItem";
import { IconChevronRight, IconStarOutlined } from "../..";

function SmallListItemDemo({ showLeftIcon, showRightIcon, activated }) {
  return (
    <SmallListItem activated={activated}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {showLeftIcon && <IconStarOutlined size={16} />} Default
      </div>
      {showRightIcon && (
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconChevronRight size={16} />
        </div>
      )}
    </SmallListItem>
  );
}

export default {
  title: "Components/Interactional/SmallListItem",
  component: SmallListItemDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=19%3A861",
    },
  },
};
const Template = ({ showLeftIcon, showRightIcon, activated }) => (
  <div style={{ width: 320 }}>
    <SmallListItemDemo showLeftIcon={showLeftIcon} showRightIcon={showRightIcon} activated={activated} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  activated: false,
  showLeftIcon: true,
  showRightIcon: true,
};
