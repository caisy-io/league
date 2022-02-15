import styled, { css } from "styled-components";
import { TableCell } from "./TableCell";
import PreviewComponent from "../preview";
import { Badge, EBadgePosition } from "../badge";
import { SolidLabel } from "../solidLabel";
import { Img } from "../../base-components/img/Img";
import { useState } from "react";
import {
  CSSProgressiveBody03,
  CSSProgressiveBody03Semibold,
} from "../../constants/styles/design-tokens/fonts/CSSTypographies";
import { CSSProgressiveCaption01 } from "../../constants/styles/design-tokens/fonts/CSSTypographies";
import { IconDotsHorizontal, IconPublish } from "../../icons";

function TableCellDemo({ children, ...args }) {
  return (
    <TableCell activated={args.activated} onClick={args.onClick}>
      {children}
    </TableCell>
  );
}

export default {
  title: "Components/Table/TableCell",
  component: TableCellDemo,
};

const SGhostWrapper = styled.div`
  background-color: var(--ui-01);
  padding: ${(props) => props.padding};
`;

const SGhostSquare = styled.div`
  background-color: var(--ui-03);
  border-radius: 4px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

// --------------- PREVIEW TEMPLATE --------------- //

const PreviewTemplate = (args) => {
  const [activated, setActivated] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <TableCellDemo onClick={!args.ghost && setActivated} activated={activated} {...args}>
      {args.ghost ? (
        <SGhostWrapper padding="20px">
          <SGhostSquare height={48} width={48} />
        </SGhostWrapper>
      ) : (
        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${activated ? "#F3F7F9" : hover ? "#E8EFF3" : "#fff"}`,
            transition: "background-color 150ms",
          }}
        >
          <PreviewComponent
            size={48}
            image={(
              <Img
                lazyload={false}
                src={
                  "https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!
                }
                resolution={48}
              />)
            }
          />
        </span>
      )}
    </TableCellDemo>
  );
};

export const Preview = PreviewTemplate.bind({});
Preview.args = {
  ghost: false,
};

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
    <TableCellDemo onClick={!args.ghost && setActivated} activated={activated}>
      {args.ghost ? (
        <SGhostWrapper padding="34px 50px 34px 16px">
          <SGhostSquare height={20} width={64} />
        </SGhostWrapper>
      ) : (
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
      )}
    </TableCellDemo>
  );
};

export const String = StringTemplate.bind({});
String.args = {
  locked: false,
  highlight: false,
  withLabel: false,
  withBadge: false,
  ghost: false,
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
  max-height: 24px;
  max-width: 59px;
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
    <TableCellDemo onClick={!args.ghost && setActivated} activated={activated} {...args}>
      {args.ghost ? (
        <SGhostWrapper>
          <STags>
            <SGhostSquare height={26} width={60} />
            <SGhostSquare height={26} width={60} />
            <SGhostSquare height={26} width={60} />
            <SGhostSquare height={26} width={26} />
          </STags>
        </SGhostWrapper>
      ) : (
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
      )}
    </TableCellDemo>
  );
};

export const Tags = TagsTemplate.bind({});
Tags.args = { ghost: false };

// --------------- STATUS TEMPLATE --------------- //

const StatusTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableCellDemo onClick={!args.ghost && setActivated} activated={activated} {...args}>
      {args.ghost ? (
        <SGhostWrapper
          style={{ height: 88, width: 86, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <SGhostSquare height={24} width={54} />
        </SGhostWrapper>
      ) : (
        <span style={{ height: 88, width: 86, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SolidLabel type="green">Status</SolidLabel>
        </span>
      )}
    </TableCellDemo>
  );
};

export const Status = StatusTemplate.bind({});
Status.args = {
  ghost: false,
};

// --------------- ACTION ICON BUTTON TEMPLATE --------------- //

const ActionIconButtonTemplate = (args) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableCellDemo onClick={!args.ghost && setActivated} activated={activated} {...args}>
      {args.ghost ? (
        <SGhostWrapper padding="32px 20px">
          <SGhostSquare height={24} width={24} />
        </SGhostWrapper>
      ) : (
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
              height: 32,
              width: 32,
            }}
          >
            <IconDotsHorizontal size={20} />
          </div>
        </span>
      )}
    </TableCellDemo>
  );
};

export const ActionIconButton = ActionIconButtonTemplate.bind({});
ActionIconButton.args = {
  ghost: false,
};

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
    <TableCellDemo onClick={!args.ghost && setActivated} activated={activated} {...args}>
      {args.ghost ? (
        <SGhostWrapper padding="32px 16px">
          <SGhostSquare width={78} height={24} />
        </SGhostWrapper>
      ) : (
        <SFlatButton activated={activated}>
          <IconPublish size={20} /> Publish
        </SFlatButton>
      )}
    </TableCellDemo>
  );
};

export const ActionFlatButton = ActionFlatButtonTemplate.bind({});
ActionFlatButton.args = {
  ghost: false,
};

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
    <TableCellDemo onClick={!args.ghost && setActivated} activated={activated} {...args}>
      {args.ghost ? (
        <SGhostWrapper padding="24px 16px">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <SGhostSquare height={40} width={40} />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <SGhostSquare height={12} width={90} />
              <SGhostSquare height={12} width={150} />
            </div>
          </div>
        </SGhostWrapper>
      ) : (
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
          <>
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
          </>
        </span>
      )}
    </TableCellDemo>
  );
};

export const User = UserTemplate.bind({});
User.args = {
  ghost: false,
};
