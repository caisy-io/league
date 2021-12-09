import React, { useState } from "react";
import { Img } from "../../base-components/img/Img";
import { IconCog } from '../../icons/IconCog';
import { IconHierarchyGit } from "../../icons/IconHierarchyGit";
import { IconTeam } from '../../icons/IconTeam';
import { IconWorkflow } from '../../icons/IconWorkflow';
import { Badge, EBadgePosition } from '../badge';
import { Button } from '../button';
import { MenuListItem } from '../menu-list-item/MenuListItem';
import { OrganizationMenuListItem } from '../organization-menu-list-item';
import { OrganizationSelectListItem } from '../organization-select-list-item';
import { Scrollbar } from '../scrollbar';
import { SearchInput } from "../search-input/SearchInput";
import { BottomButtonWrapper } from './BottomButtonWrapper';
import { OrganizationMenu } from './OrganizationMenu';
import { PopoverContentWrapper } from './PopoverContentWrapper';
import { SelectionWrapper } from './SelectionWrapper';
import { SettingsList } from './SettingsList';
import { SOrganizationMenuDivider } from "./styles/SDivider";

export default {
  title: `Components/Menus & Popovers/OrganizationMenu`,
  component: OrganizationMenuDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function OrganizationMenuDemo({ content, ...args }) {

  const [organizationOpened, setOrganizationOpened] = useState(false);
  const [groupOpened, setGroupOpened] = useState(false);
  const [projectOpened, setProjectOpened] = useState(false);
  const [environmentOpened, setEnvironmentOpened] = useState(false);

  function showPage(currentPage: string) {
    switch (currentPage) {
      case "organization": {
        setOrganizationOpened(true);
        break;
      }
      case "group": {
        setGroupOpened(true);
        break;
      }
      case "project": {
        setProjectOpened(true);
        break;
      }
      case "environment": {
        setEnvironmentOpened(true);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  };

  function closePage(currentPage: string) {
    switch (currentPage) {
      case "organization": {
        setOrganizationOpened(false);
        break;
      }
      case "group": {
        setGroupOpened(false);
        break;
      }
      case "project": {
        setProjectOpened(false);
        break;
      }
      case "environment": {
        setEnvironmentOpened(false);
        break;
      }
    }
  };

  return <OrganizationMenu>
    <OrganizationMenuListItem onClick={() => showPage("organization")} itemSize="large" title="Default" label="Organization" previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }}
    ></OrganizationMenuListItem>
    {/* TO DO: full width button */}
    <Button type="tertiary">Organization settings</Button>

    <SelectionWrapper>
      <OrganizationMenuListItem onClick={() => showPage("group")} title="Default" label="Group" itemSize="medium" badgeValue="3" previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }}><Badge value="1" position={EBadgePosition.Center} type={'regular'} size="small" /></OrganizationMenuListItem>
      <SOrganizationMenuDivider />
      <OrganizationMenuListItem onClick={() => showPage("project")} title="Default" label="Project" itemSize="small" badgeValue="1" previewProps={{ text: "pdf"! }}><Badge value="1" position={EBadgePosition.Center} type={'regular'} size="small" /></OrganizationMenuListItem>
      <OrganizationMenuListItem onClick={() => showPage("environment")} title="Default" label="Environment" itemSize="small" badgeValue="1" previewProps={{ icon: <IconHierarchyGit /> }}><Badge value="1" position={EBadgePosition.Center} type={'regular'} size="small" /></OrganizationMenuListItem>
    </SelectionWrapper>

    <SettingsList listTitle="Project settings">
      <MenuListItem size="small">
        <div> <IconCog /> <span >General settings</span></div>
      </MenuListItem>
      <MenuListItem size="small">
        <div> <IconWorkflow /> <span >Workflows</span></div>
      </MenuListItem>
      <MenuListItem size="small">
        <div> <IconTeam /> <span >Team members</span></div>
      </MenuListItem>
    </SettingsList>

    <PopoverContentWrapper active={organizationOpened}>
      <p style={{ height: "64px" }}>Organizations Modal header</p>
      <SearchInput></SearchInput>
      <Scrollbar>
        <OrganizationSelectListItem title="Metacarbon" label="metacarbon.com" itemSize="large" badgeText="Owner" previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }} ></OrganizationSelectListItem>
        <OrganizationSelectListItem title="Metacarbon" label="metacarbon.com" itemSize="large" badgeText="Owner" previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }} ></OrganizationSelectListItem>
        <OrganizationSelectListItem title="Metacarbon" label="metacarbon.com" itemSize="large" badgeText="Owner" previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }} ></OrganizationSelectListItem>
        <OrganizationSelectListItem title="Metacarbon" label="metacarbon.com" itemSize="large" badgeText="Owner" previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }} ></OrganizationSelectListItem>
        <OrganizationSelectListItem title="Metacarbon" label="metacarbon.com" itemSize="large" badgeText="Owner" previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }} ></OrganizationSelectListItem>
      </Scrollbar>
      <BottomButtonWrapper>
        <Button onClick={() => closePage("organization")}>Close</Button>
      </BottomButtonWrapper>
    </PopoverContentWrapper>

    <PopoverContentWrapper active={groupOpened}>
      <p>Groups Modal header</p>
      <SearchInput></SearchInput>
      <Button onClick={() => closePage("group")}>Close</Button>
    </PopoverContentWrapper>

    <PopoverContentWrapper active={projectOpened}>
      <p>Projects Modal header</p>
      <SearchInput></SearchInput>
      <Button onClick={() => closePage("project")}>Close</Button>
    </PopoverContentWrapper>

    <PopoverContentWrapper active={environmentOpened}>
      <p>Environments Modal header</p>
      <SearchInput></SearchInput>
      <Button onClick={() => closePage("environment")}>Close</Button>
    </PopoverContentWrapper>

  </OrganizationMenu >
}

const Template = (args) => < OrganizationMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
