import React, { useState } from "react";
import { Layout } from "./Layout";
import { initialSize, LayoutSider } from "./LayoutSider";
import { LayoutMainNav } from "./LayoutMainNav";
import { LayoutContent } from "./LayoutContent";
import { LayoutTopNav } from "./LayoutTopNav";
import { SLayoutWrapper } from "./styles/SLayoutWrapper";
import { SLayoutContentWrapper } from "./styles/SLayoutContentWrapper";
import { SLayoutSiderWrapper } from "./styles/SLayoutSiderWrapper";
import { SidebarTag } from "../sidebarTag";
import { useWindowDimensions } from "../../utils";
import { css } from "styled-components";

const CSSLayoutOverwrite = css`
  color: #000000;
  line-height: 3;
  height: 100vh;
`;

const CSSLayoutMainNavOverwrite = css`
  background-color: rgba(16, 83, 255, 0.5);
`;
const CSSLayoutTopNavOverwrite = css`
  background-color: rgba(16, 83, 255, 0.4);
`;
const CSSLayoutSiderOverwrite = css`
  background-color: rgba(16, 83, 255, 0.25);
`;
const CSSLayoutContentOverwrite = css`
  background-color: rgba(16, 83, 255, 0.1);
`;

const Template = (args) => {
  const [leftSiderOpened, setLeftSiderOpened] = useState(true);
  const [leftSiderSize, setLeftSiderSize] = useState(initialSize);
  const [rightSiderOpened, setRightSiderOpened] = useState(true);
  const [rightSiderSize, setRightSiderSize] = useState(initialSize);

  const { width } = useWindowDimensions();
  const mainNavWidth = 60;

  return (
    <Layout styleOverwrite={CSSLayoutOverwrite} >
      <LayoutMainNav styleOverwrite={CSSLayoutMainNavOverwrite} width={mainNavWidth}>
        <p>nav</p>
      </LayoutMainNav>
      <SLayoutWrapper>
        <LayoutTopNav styleOverwrite={CSSLayoutTopNavOverwrite}>Nav bar</LayoutTopNav>
        <SLayoutContentWrapper>
          <SLayoutSiderWrapper left>
            {leftSiderOpened && (
              <LayoutSider left styleOverwrite={CSSLayoutSiderOverwrite} onSizeChanged={setLeftSiderSize}>
                <p>Sider left, resizable side on right side</p>
              </LayoutSider>
            )}
            <SidebarTag left onOpenChanged={setLeftSiderOpened} />
          </SLayoutSiderWrapper>
          <LayoutContent
            styleOverwrite={CSSLayoutContentOverwrite}
            width={width - mainNavWidth - leftSiderSize.width - rightSiderSize.width + "px"}
          >
            <p>{args.content}</p>
          </LayoutContent>
          <SLayoutSiderWrapper left={false}>
            <SidebarTag left={false} onOpenChanged={setRightSiderOpened} />
            {rightSiderOpened && (
              <LayoutSider styleOverwrite={CSSLayoutSiderOverwrite} left={false} onSizeChanged={setRightSiderSize}>
                <p>Sider right, resizable side on left side</p>
              </LayoutSider>
            )}
          </SLayoutSiderWrapper>
        </SLayoutContentWrapper>
      </SLayoutWrapper>
    </Layout>
  );
};

export default {
  title: "Components/Utilities/Layout",
  component: Template,
  argTypes: {
    content: {
      description: "Content of body",
      control: { type: "text" },
    },
  },
};

export const Default = Template.bind({});

Default.args = {
  content: "Lorem ipsum dolor sit amet",
};
Default.parameters = {
  layout: "fullscreen",
};

// With LeftSider
export const LeftSider = ({ content, ...args }) => {
  const [leftSiderOpened, setLeftSiderOpened] = useState(true);
  const [leftSiderSize, setLeftSiderSize] = useState(initialSize);

  const { width } = useWindowDimensions();
  const mainNavWidth = 60;

  return (
    <Layout styleOverwrite={CSSLayoutOverwrite}>
      <LayoutMainNav styleOverwrite={CSSLayoutMainNavOverwrite} width={mainNavWidth}>
        <p>nav</p>
      </LayoutMainNav>
      <SLayoutWrapper>
        <LayoutTopNav styleOverwrite={CSSLayoutTopNavOverwrite}>Nav bar</LayoutTopNav>
        <SLayoutContentWrapper>
          <SLayoutSiderWrapper left>
            {leftSiderOpened && (
              <LayoutSider styleOverwrite={CSSLayoutSiderOverwrite} left onSizeChanged={setLeftSiderSize}>
                <p>Sider left, resizable side on right side</p>
              </LayoutSider>
            )}
            <SidebarTag left onOpenChanged={setLeftSiderOpened} />
          </SLayoutSiderWrapper>
          <LayoutContent
            styleOverwrite={CSSLayoutContentOverwrite}
            width={width - mainNavWidth - leftSiderSize.width + "px"}
          >
            <p>{content}</p>
            {args.children}
          </LayoutContent>
        </SLayoutContentWrapper>
      </SLayoutWrapper>
    </Layout>
  );
};

LeftSider.args = {
  content: "Lorem ipsum dolor sit amet",
};

LeftSider.parameters = {
  layout: "fullscreen",
};

// With RightSider
export const RightSider = ({ content, ...args }) => {
  const [rightSiderOpened, setRightSiderOpened] = useState(true);
  const [rightSiderSize, setRightSiderSize] = useState(initialSize);

  const { width } = useWindowDimensions();
  const mainNavWidth = 60;

  return (
    <Layout styleOverwrite={CSSLayoutOverwrite} {...args}>
      <LayoutMainNav styleOverwrite={CSSLayoutMainNavOverwrite} width={mainNavWidth}>
        <p>nav</p>
      </LayoutMainNav>
      <SLayoutWrapper>
        <LayoutTopNav styleOverwrite={CSSLayoutTopNavOverwrite}>Nav bar</LayoutTopNav>
        <SLayoutContentWrapper>
          <LayoutContent
            styleOverwrite={CSSLayoutContentOverwrite}
            width={width - mainNavWidth - rightSiderSize.width + "px"}
          >
            <p>{content}</p>
            {args.children}
          </LayoutContent>
          <SLayoutSiderWrapper left={false}>
            <SidebarTag left={false} onOpenChanged={setRightSiderOpened} />
            {rightSiderOpened && (
              <LayoutSider styleOverwrite={CSSLayoutSiderOverwrite} left={false} onSizeChanged={setRightSiderSize}>
                <p>Sider right, resizable side on left side</p>
              </LayoutSider>
            )}
          </SLayoutSiderWrapper>
        </SLayoutContentWrapper>
      </SLayoutWrapper>
    </Layout>
  );
};

RightSider.args = {
  content: "Lorem ipsum dolor sit amet",
};

RightSider.parameters = {
  layout: "fullscreen",
};
