import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AvatarLegacy } from './AvatarLegacy';
import { AvatarLegacyGroup } from './AvatarLegacyGroup';
import { Tooltip } from '../tooltip/Tooltip';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarLegacyGroup,
  argTypes: {},
} as ComponentMeta<typeof AvatarLegacyGroup>;

const Template: ComponentStory<typeof AvatarLegacyGroup> = (args) => <AvatarLegacyGroup {...args} />;

export const Default = () => (
  <AvatarLegacyGroup>
    <AvatarLegacy>DL</AvatarLegacy>
    <AvatarLegacy>VL</AvatarLegacy>
    <AvatarLegacy
      imageUrl={
        "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80"
      }
    >
      MG
    </AvatarLegacy>
  </AvatarLegacyGroup>
);

export const WithTooltip = () => (
  <>
    <AvatarLegacyGroup>
      <Tooltip
        content={<div style={{ padding: "2px 10px" }}>d.loenicker@cyclus.digital</div>}
        placement="top"
        supressArrow
      >
        <AvatarLegacy>DL</AvatarLegacy>
      </Tooltip>
      <Tooltip
        content={<div style={{ padding: "2px 10px" }}>v.loenicker@cyclus.digital</div>}
        placement="top"
        supressArrow
      >
        <AvatarLegacy>VL</AvatarLegacy>
      </Tooltip>
      <Tooltip content={<div style={{ padding: "2px 10px" }}>Alfred Schrödinger</div>} placement="top" supressArrow>
        <AvatarLegacy
          imageUrl={"https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80"}
        >
          MG
        </AvatarLegacy>
      </Tooltip>
    </AvatarLegacyGroup>
  </>
);