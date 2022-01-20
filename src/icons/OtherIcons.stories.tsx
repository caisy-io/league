import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import { 
  IconEmojis,
  IconCog,
  IconPin,
  IconPlusBox,
  IconPlusCircle,
  IconPlus,
  IconMinusCircle,
  IconMinus,
  IconMoreMenuHorizontal,
  IconLock,
  IconUnlock,
  IconTableEdit,
  IconColumnSettings,
  IconWorkflows,
  IconTeam,
  IconWarningHex,
  IconWarning,
  IconHierarchyGit,
  IconTags,
  IconTypeface,
  IconPointer,
  IconUserActivityCursor,
  IconUserTypingCursor,
  IconBoxPointerCursor,
  IconReferenceTreeStructure,
  IconLivePreviewPlay,
  IconDesktop,
  IconMobile,
  IconVideoPlay,
  IconClock,
  IconBackClock,
  IconCheckmarkFieldList,
  IconFormsCheckFields,
  IconUniqueComponent,
  IconMutationsApiSettings,
  IconHashtagSquare,
  IconTogglesSquare,
  IconTranslate,
  IconUserProfile,
  IconUsersProfileGroup,
  IconCloudDoneUpload,
  IconProjectsFolder,
  IconItemsGroup,
  IconAlarmClock,
  IconUnscheduledAlarmClock,
  IconVariablesCode,
  IconHeadersCode,
  IconUsagePieChartStats,
  IconCreditCard,
  IconCreditCardDetailsSettings,
  IconDetailsAtmCheck,
  IconSettingsDetails,
  IconPersonalKeyToken,
  IconPasswordKey,
  IconMessageChat,
  IconSecurityAuth,
} from './index';

const IconWrapper: any = styled.div`
  color: var(--icon-01);
`

const icons = {
  IconEmojis: ({size}) => <IconEmojis size={size}/>,
  IconCog: ({size}) => <IconCog size={size}/>,
  IconPin: ({size, solid}) => <IconPin size={size} solid={solid}/>,
  IconPlusBox: ({size }) => <IconPlusBox size={size}/>,
  IconPlusCircle: ({size }) => <IconPlusCircle size={size}/>,
  IconPlus: ({size }) => <IconPlus size={size}/>,
  IconMinusCircle: ({size, solid }) => <IconMinusCircle size={size} solid={solid}/>,
  IconMinus: ({size }) => <IconMinus size={size}/>,
  IconMoreMenuHorizontal: ({size }) => <IconMoreMenuHorizontal size={size}/>,
  IconLock: ({size, solid }) => <IconLock size={size} solid={solid}/>,
  IconUnlock: ({size, solid }) => <IconUnlock size={size} solid={solid}/>,
  IconTableEdit: ({size }) => <IconTableEdit size={size}/>,
  IconColumnSettings: ({size }) => <IconColumnSettings size={size}/>,
  IconWorkflows: ({size }) => <IconWorkflows size={size}/>,
  IconTeam: ({size }) => <IconTeam size={size}/>,
  IconWarningHex: ({size }) => <IconWarningHex size={size}/>,
  IconWarning: ({size, solid }) => <IconWarning size={size} solid={solid}/>,
  IconHierarchyGit: ({size }) => <IconHierarchyGit size={size}/>,
  IconTags: ({size }) => <IconTags size={size}/>,
  IconTypeface: ({size }) => <IconTypeface size={size}/>,
  IconPointer: ({size }) => <IconPointer size={size}/>,
  IconUserActivityCursor: ({size }) => <IconUserActivityCursor size={size}/>,
  IconUserTypingCursor: ({size }) => <IconUserTypingCursor size={size}/>,
  IconBoxPointerCursor: ({size }) => <IconBoxPointerCursor size={size}/>,
  IconReferenceTreeStructure: ({size }) => <IconReferenceTreeStructure size={size}/>,
  IconLivePreviewPlay: ({size }) => <IconLivePreviewPlay size={size}/>,
  IconDesktop: ({size }) => <IconDesktop size={size}/>,
  IconMobile: ({size }) => <IconMobile size={size}/>,
  IconVideoPlay: ({size }) => <IconVideoPlay size={size}/>,
  IconClock: ({size }) => <IconClock size={size}/>,
  IconBackClock: ({size }) => <IconBackClock size={size}/>,
  IconCheckmarkFieldList: ({size }) => <IconCheckmarkFieldList size={size}/>,
  IconFormsCheckFields: ({size }) => <IconFormsCheckFields size={size}/>,
  IconUniqueComponent: ({size }) => <IconUniqueComponent size={size}/>,
  IconMutationsApiSettings: ({size }) => <IconMutationsApiSettings size={size}/>,
  IconHashtagSquare: ({size }) => <IconHashtagSquare size={size}/>,
  IconTogglesSquare: ({size }) => <IconTogglesSquare size={size}/>,
  IconTranslate: ({size }) => <IconTranslate size={size}/>,
  IconUserProfile: ({size }) => <IconUserProfile size={size}/>,
  IconUsersProfileGroup: ({size }) => <IconUsersProfileGroup size={size}/>,
  IconCloudDoneUpload: ({size }) => <IconCloudDoneUpload size={size}/>,
  IconProjectsFolder: ({size }) => <IconProjectsFolder size={size}/>,
  IconItemsGroup: ({size }) => <IconItemsGroup size={size}/>,
  IconAlarmClock: ({size }) => <IconAlarmClock size={size}/>,
  IconUnscheduledAlarmClock: ({size }) => <IconUnscheduledAlarmClock size={size}/>,
  IconVariablesCode: ({size }) => <IconVariablesCode size={size}/>,
  IconHeadersCode: ({size }) => <IconHeadersCode size={size}/>,
  IconUsagePieChartStats: ({size }) => <IconUsagePieChartStats size={size}/>,
  IconCreditCard: ({size }) => <IconCreditCard size={size}/>,
  IconCreditCardDetailsSettings: ({size }) => <IconCreditCardDetailsSettings size={size}/>,
  IconDetailsAtmCheck: ({size }) => <IconDetailsAtmCheck size={size}/>,
  IconSettingsDetails: ({size }) => <IconSettingsDetails size={size}/>,
  IconPersonalKeyToken: ({size }) => <IconPersonalKeyToken size={size}/>,
  IconPasswordKey: ({size }) => <IconPasswordKey size={size}/>,
  IconMessageChat: ({size }) => <IconMessageChat size={size}/>,
  IconSecurityAuth: ({size }) => <IconSecurityAuth size={size}/>,
};

interface IOtherIconsDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 28;
  icon?: string;
  solid?: boolean;
}

const OtherIconsDemo: FC<IOtherIconsDemo> = ({ ...args }) => {
  const Icon = icons[args.icon]
  return (
    <IconWrapper>
      <Icon size={args.size} solid={args.solid}/>
    </IconWrapper>
  );
};

export default {
  title: "Icons/OtherIcons/Icon",
  component: OtherIconsDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [12, 16, 20, 24, 32],
      control: { type: 'select' }
    },
    icon: {
      name: "icon",
      description: "Icon name",
      options: ['IconEmojis', 'IconCog', 'IconPin', 'IconPlusBox', 'IconPlusCircle', 'IconPlus', 'IconMinusCircle', 'IconMinus', 'IconMoreMenuHorizontal',
        'IconLock', 'IconUnlock', 'IconTableEdit', 'IconColumnSettings', 'IconWorkflows', 'IconTeam', 'IconWarningHex', 'IconWarning', 'IconHierarchyGit',
        'IconTags', 'IconTypeface', 'IconPointer', 'IconUserActivityCursor', 'IconUserTypingCursor', 'IconBoxPointerCursor', 'IconReferenceTreeStructure',
        'IconLivePreviewPlay', 'IconDesktop', 'IconMobile', 'IconVideoPlay', 'IconClock', 'IconBackClock', 'IconCheckmarkFieldList', 'IconFormsCheckFields',
        'IconUniqueComponent', 'IconMutationsApiSettings', 'IconHashtagSquare', 'IconTogglesSquare', 'IconTranslate', 'IconUserProfile', 'IconUsersProfileGroup',
        'IconCloudDoneUpload', 'IconProjectsFolder', 'IconItemsGroup', 'IconAlarmClock', 'IconUnscheduledAlarmClock', 'IconVariablesCode', 'IconHeadersCode',
        'IconUsagePieChartStats', 'IconCreditCard', 'IconCreditCardDetailsSettings', 'IconDetailsAtmCheck', 'IconSettingsDetails', 'IconPersonalKeyToken',
        'IconPasswordKey', 'IconMessageChat', 'IconSecurityAuth'],
      control: { type: 'select' },
      defaultValue: 'IconEmojis',
    },
    solid: {
      name: "solid",
      description: "Solid icon",
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean'}
    }
  },
} as ComponentMeta<typeof OtherIconsDemo>;

const Template:  ComponentStory<typeof OtherIconsDemo>= (args) => <OtherIconsDemo  {...args} />;

export const OtherIcons = Template.bind({});
OtherIcons.args = {
};
