import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { 
    Grid, 
    GridItem, 
    GridPadding, 
    Spacer, 
    IconUnlink, 
    IconAngleCollapse, 
    IconAngleExpand, 
    IconCheckmark, 
    IconDragable, 
    IconEdit, 
    IconLink, 
    IconPlus, 
    IconTranslate, 
    IconTrashDelete 
} from "../..";

const SFlexRow = styled.div`
  display: flex;
  gap: 16px;
`;

function ButtonDemo() {
  return (
    <GridPadding>
      <h1>Interface</h1>
      <pre>{`
        type IButtonType = "primary" | "secondary" | "danger" | "neutral" | "light" | "link";
        type IButtonSize = "default" | "small" | "large";
        type IButtonState = "default" | "hover" | "focus" | "disabled";
        interface IButtonProps {
        type?: IButtonType;
        size?: IButtonSize;
        dashed?: boolean;
        round?: boolean;
        disabled?: boolean;
        onClick?: (e: Event) => void;
        }
      `}</pre>
      <Grid>
        <GridItem bronze={{ row: { start: 1, end: 1 }, col: { start: 1, end: 12 } }}>
          <Spacer bronze="32" />
          <h1>SIZES</h1>
          <Spacer bronze="16" />
          <SFlexRow>
            <Button size="large">large</Button>
            <Button>default</Button>
            <Button size="small">small</Button>
          </SFlexRow>
        </GridItem>
        <GridItem bronze={{ row: { start: 2, end: 2 }, col: { start: 1, end: 12 } }}>
          <Spacer bronze="32" />
          <h1>TYPES</h1>
          <Spacer bronze="16" />
          <SFlexRow>
            <Button type="primary">primary</Button>
            <Button>default / neutral</Button>
            <Button type="secondary">secondary</Button>
            <Button type="light">light</Button>
            <Button type="link">link</Button>
          </SFlexRow>
        </GridItem>
        <GridItem bronze={{ row: { start: 3, end: 3 }, col: { start: 1, end: 12 } }}>
          <Spacer bronze="32" />
          <h1>Samples</h1>
          <Spacer bronze="16" />
          <SFlexRow>
            <Button type="link" size="small">
              <IconLink />
              {"Link existing Document"}
            </Button>
            <Button type="link" dashed size="small">
              <IconLink />
              {"Link existing Document"}
            </Button>
            <Button type="link" size="small">
              <IconUnlink />
              {"Unlink"}
            </Button>
            <Button type="link" size="small">
              <IconUnlink />
            </Button>
            <Button type="link" size="small">
              <IconEdit />
            </Button>
          </SFlexRow>
        </GridItem>
        <GridItem bronze={{ row: { start: 4, end: 4 }, col: { start: 1, end: 12 } }}>
          <Spacer bronze="32" />
          <SFlexRow>
            <Button size="large" type="primary">
              Large button
            </Button>
            <Button type="secondary">
              <IconCheckmark />
              Normal button
            </Button>
            <Button size="small" type="light">
              <IconCheckmark />
              small light Button
            </Button>
            <Button size="small" type="neutral">
              Small button
            </Button>
            <Button size="large" type="light" dashed round>
              <IconPlus />
            </Button>
          </SFlexRow>
          <Spacer bronze="32" />
          <SFlexRow>
            <Button type="neutral">
              <IconPlus />
            </Button>
            <Button type="neutral">
              <IconDragable />
            </Button>
            <Button type="neutral">
              <IconTranslate />
            </Button>
            <Button type="neutral">
              <IconAngleCollapse />
            </Button>
            <Button type="danger">
              <IconTrashDelete />
              Löschen
            </Button>
            <Button type="link" size="small">
              <IconAngleExpand />
            </Button>
            <Button size="small" type="neutral">
              <IconPlus />
            </Button>
          </SFlexRow>
        </GridItem>
      </Grid>
    </GridPadding>
  );
}

export default {
  title: 'Components/Button',
  component: ButtonDemo,
};
const Template = (args) => <ButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
