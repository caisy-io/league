import React from "react";
import styled from "styled-components";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { IconColorPalette, IconDelete, IconEdit, IconPlusBox, IconStarOutlined } from "../../icons";
import { ClickOutside, useDimensions } from "../../utils";
import { Checkbox } from "../checkbox/Checkbox";
import { FlatActionButton } from "../flat-action-button";
import { MenuListItem } from "../menu-list-item/MenuListItem";
import { OutLineLabel } from "../out-line-label";
import ColorLabel from "../out-line-label/ColorLabel";
import { Popover } from "../popover";
import { TagListItem } from "./TagListItem";
import { ColorPicker } from "../color-picker";

export default {
  title: `Components/List Items/TagListItem`,
  component: TagListItem,
  argTypes: {
    disabled: {
      description: "Show disabled state of component",
      control: { type: "boolean" },
    },
    label: {
      description: "Label for the tag list item",
      control: { type: "text" },
    },
  },
};

const Wrapper: any = styled.div`
  width: 320px;
`;

const RightIconWrapper: any = styled(SFlex)`
  flex: 1;

  justify-content: flex-end;
`;

const PopoverWrapper: any = styled.div`
  width: 216px;
  background-color: white;
  border-radius: 8px;
`;

const Template = (args) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [opened, setOpened] = React.useState(true);
  const [openedSecondary, setSecondaryOpened] = React.useState(false);

  const ref = React.useRef(null);
  const { width } = useDimensions(ref);

  return (
    <Wrapper ref={ref}>
      <TagListItem>
        <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
          Default
        </OutLineLabel>
        <RightIconWrapper>
          <IconStarOutlined size={20} />
        </RightIconWrapper>
      </TagListItem>
      {opened && (
        <Popover disableTriangle placement="right" reference={ref}>
          <PopoverWrapper style={{ width }}>
            {!openedSecondary ? (
              <MenuListItem
                size="medium"
                onClick={() => {
                  setSecondaryOpened(true);
                }}
              >
                <IconColorPalette />
                Change color
              </MenuListItem>
            ) : (
              <ColorPicker />
            )}
          </PopoverWrapper>
        </Popover>
      )}
    </Wrapper>
  );
};

export const Default = Template.bind({});

// Default.args = {
//   outlineLabel: (
//     <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
//       Default
//     </OutLineLabel>
//   ),
// };

// export const WithLeftIcon = Template.bind({});

// WithLeftIcon.args = {
//   leftIcon: <IconStarOutlined size={20} />,
//   outlineLabel: (
//     <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
//       Default
//     </OutLineLabel>
//   ),
// };

// export const WithLeftCheckbox = (args) => {
//   const [isChecked, setIsChecked] = React.useState(false);

//   return (
//     <Wrapper>
//       <TagListItem
//         leftIcon={
//           <Checkbox
//             onChange={(e) => {
//               setIsChecked(!isChecked);
//             }}
//             checked={isChecked}
//           />
//         }
//         {...args}
//       />
//     </Wrapper>
//   );
// };

// WithLeftCheckbox.args = {
//   outlineLabel: (
//     <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
//       Default
//     </OutLineLabel>
//   ),
// };

// export const WithRightIcon = Template.bind({});

// WithRightIcon.args = {
//   rightIcon: <IconStarOutlined size={20} />,
//   outlineLabel: (
//     <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
//       Default
//     </OutLineLabel>
//   ),
// };

// export const WithRightIconAndPopover = Template.bind({});

// WithRightIconAndPopover.args = {
//   outlineLabel: (
//     <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
//       Default
//     </OutLineLabel>
//   ),
//   popover: (
//     <PopoverWrapper>
//       <MenuListItem size="medium">
//         <div>
//           <IconColorPalette />
//           Change color
//         </div>
//       </MenuListItem>
//       <MenuListItem size="medium">
//         <div>
//           <IconEdit />
//           Rename
//         </div>
//       </MenuListItem>
//       <MenuListItem size="medium">
//         <div>
//           <IconDelete />
//           Delete
//         </div>
//       </MenuListItem>
//     </PopoverWrapper>
//   ),
// };

// export const WithLabel = Template.bind({});

// WithLabel.args = {
//   label: "Default",
//   outlineLabel: (
//     <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
//       Default
//     </OutLineLabel>
//   ),
// };

// export const WithFlatActionButton = Template.bind({});

// WithFlatActionButton.args = {
//   flatActionButton: (
//     <FlatActionButton type="blue">
//       <IconPlusBox />
//       Create new tag
//     </FlatActionButton>
//   ),
//   outlineLabel: (
//     <OutLineLabel size="medium" colorLabel={<ColorLabel color="var(--ui-04)" />}>
//       Default
//     </OutLineLabel>
//   ),
// };
