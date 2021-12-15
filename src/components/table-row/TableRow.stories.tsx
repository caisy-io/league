import styled, { css } from "styled-components";
import { TableRow } from "./TableRow";
import PreviewComponent from "../preview/Preview";
import { Badge, EBadgePosition, SolidLabel } from "..";
import { Img } from "../../base-components/img/Img";
import { useState } from "react";
import {
  CSSProgressiveBody03,
  CSSProgressiveBody03Semibold,
} from "../../constants/styles/design-tokens/fonts/CSSTypographies";
import { CSSProgressiveCaption01 } from "../../constants/styles/fonts";
import { IconDotsHorizontal, IconPublish } from "../..";

function TableRowDemo({ children, ...args }) {
  return (
    <TableRow activated={args.activated} onClick={args.onClick}>
      {children}
    </TableRow>
  );
}

export default {
  title: "Components/Table/TableRow",
  component: TableRowDemo,
};

// --------------- PREVIEW TEMPLATE --------------- //

const PreviewTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableRowDemo onClick={setActivated} activated={activated} {...args}>
      <span style={{ padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PreviewComponent
          image={
            <Img
              lazyload={false}
              src={
                "https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!
              }
              resolution={48}
            />
          }
        />
      </span>
    </TableRowDemo>
  );
};

export const Preview = PreviewTemplate.bind({});
Preview.args = {};

// --------------- STRING TEMPLATE --------------- //

const CSSSimple = css`
  ${CSSProgressiveBody03}
`;

const CSSHightlight = css`
  ${CSSProgressiveBody03Semibold}
`;

const SString = styled.p`
  color: var(--text-01);
  margin: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  ${CSSSimple};

  ${(props) => props.highlight && CSSHightlight}
`;

const StringTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableRowDemo onClick={setActivated} activated={activated}>
      <span
        style={{
          height: 88,
          minWidth: 130,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRight: args.locked && "1px solid var(--ui-03)",
        }}
      >
        <SString highlight={args.highlight}>
          {args.withBadge && <Badge type="dark" value="1" position={EBadgePosition.Center} size="small" />}
          Default {args.withLabel && <SolidLabel type="grey">Label</SolidLabel>}
        </SString>
      </span>
    </TableRowDemo>
  );
};

export const String = StringTemplate.bind({});
String.args = {
  locked: false,
  highlight: false,
  withLabel: false,
  withBadge: false,
};

// --------------- TAGS TEMPLATE --------------- //

const STags = styled.div`
  padding: 32px 16px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const STag = styled.div`
  ${CSSProgressiveCaption01}
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--ui-03);
  border-radius: 4px;
`;

const STagBadge = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const TagsTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableRowDemo onClick={setActivated} activated={activated} {...args}>
      <STags>
        <STag>
          <STagBadge color="var(--tag-01)" />
          Tag A
        </STag>
        <STag>
          <STagBadge color="var(--tag-02)" />
          Tag B
        </STag>
        <STag>
          <STagBadge color="var(--tag-03)" />
          Tag C
        </STag>
        <STag>3</STag>
      </STags>
    </TableRowDemo>
  );
};

export const Tags = TagsTemplate.bind({});
Tags.args = {};

// --------------- STATUS TEMPLATE --------------- //

const StatusTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableRowDemo onClick={setActivated} activated={activated} {...args}>
      <span style={{ padding: "32px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <SolidLabel type="green">Status</SolidLabel>
      </span>
    </TableRowDemo>
  );
};

export const Status = StatusTemplate.bind({});
Status.args = {};

// --------------- ACTION ICON BUTTON TEMPLATE --------------- //

const ActionIconButtonTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableRowDemo onClick={setActivated} activated={activated} {...args}>
      <span style={{ padding: "28px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 6,
            border: "1px solid #E8EFF3",
            boxSizing: "border-box",
            borderRadius: 6,
          }}
        >
          <IconDotsHorizontal size={20} />
        </div>
      </span>
    </TableRowDemo>
  );
};

export const ActionIconButton = ActionIconButtonTemplate.bind({});
ActionIconButton.args = {};

// --------------- ICON FLAT BUTTON TEMPLATE --------------- //

const SFlatButton = styled.div`
  ${CSSProgressiveBody03Semibold};
  padding: 34px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-04);
  gap: 8px;
  transition: color 150ms;

  &:hover {
    color: var(--hover-text-01);
    ${(props) => props.activated && "color: var(--active-text-01);"}
  }
  ${(props) => props.activated && "color: var(--active-text-01);"}

  &:active {
    color: var(--active-text-01);
  }
`;

const ActionFlatButtonTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableRowDemo onClick={setActivated} activated={activated} {...args}>
      <SFlatButton activated={activated}>
        <IconPublish size={20} /> Publish
      </SFlatButton>
    </TableRowDemo>
  );
};

export const ActionFlatButton = ActionFlatButtonTemplate.bind({});
ActionFlatButton.args = {};

// --------------- USER TEMPLATE --------------- //

const SUserName = styled.p`
  ${CSSProgressiveBody03Semibold};
  display: flex;
  align-items: center;
  color: var(--text-01);
`;

const SUserMail = styled.p`
  ${CSSProgressiveCaption01};
  display: flex;
  align-items: center;
  color: var(--text-01);
`;

const SUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableRowDemo onClick={setActivated} activated={activated} {...args}>
      <span
        style={{
          padding: "24px 16px",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 16,
          maxWidth: 250,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          minWidth: 0,
        }}
      >
        <PreviewComponent
          size={40}
          image={
            <Img
              lazyload={false}
              src={
                "https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!
              }
              resolution={48}
            />
          }
        />
        <SUserInfo>
          <SUserName>John Doe</SUserName>
          <SUserMail>email.example@gmail.com</SUserMail>
        </SUserInfo>
      </span>
    </TableRowDemo>
  );
};

export const User = UserTemplate.bind({});
User.args = {};
