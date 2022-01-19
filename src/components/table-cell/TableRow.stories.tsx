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
import { CSSProgressiveCaption01 } from "../../constants/styles/fonts";
import { IconDotsHorizontal, IconPublish } from "../../icons";

function TableCellDemo({ activated, onClick, children }) {
  return (
    <TableCell activated={activated} onClick={onClick}>
      {children}
    </TableCell>
  );
}

export default {
  title: "Components/Table/TableRow",
  component: TableCellDemo,
};

const SRowWrapper = styled.div`
  display: flex;
`;

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

const DocumentRowTemplate = (args) => {
  const [activated, setActivated] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <SRowWrapper>
      <TableCellDemo onClick={!args.ghost && setActivated} activated={activated} {...args}>
        {args.ghost ? (
          <SGhostWrapper padding="20px">
            <SGhostSquare height={48} width={48} />
          </SGhostWrapper>
        ) : (
          <span
            style={{
              padding: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PreviewComponent
              size={48}
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
        )}
      </TableCellDemo>

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
            }}
          >
            <SString highlight={false}>
              Default <SolidLabel type="grey">Label</SolidLabel>
            </SString>
          </span>
        )}
      </TableCellDemo>

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
    </SRowWrapper>
  );
};

export const SampleDocumentRow = DocumentRowTemplate.bind({});
SampleDocumentRow.args = {
  ghost: false,
};
