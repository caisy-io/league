import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ButtonsBar from "./ButtonsBar";
import { Button } from "../button";
import { IconStarOutlined } from "../../icons"

const Wrapper: any = styled.div`
  width: 294px;
`

export default {
  title: "Components/Buttons/ButtonsBar",
  component: ButtonsBar,
  argTypes: {},
} as ComponentMeta<typeof ButtonsBar>;

export const Simple: ComponentStory<typeof ButtonsBar> = () => (
  <Wrapper>
    <ButtonsBar>
      <Button onClick={() => alert("Clicked Button")} type="primary" sticked={true}>
        <IconStarOutlined size={20}/>
        {"Default"}
      </Button>
    </ButtonsBar>
  </Wrapper>
);

export const Double: ComponentStory<typeof ButtonsBar> = () => (
  <Wrapper>
    <ButtonsBar>
      <Button onClick={() => alert("Clicked Button 1")} type="primary" sticked={true}>
        <IconStarOutlined size={20}/>
        {"Default 1"}
      </Button>

      <Button onClick={() => alert("Clicked Button 2")} type="primary" sticked={true}>
        <IconStarOutlined size={20}/>
        {"Default 2"}
      </Button>
    </ButtonsBar>
  </Wrapper>
);

