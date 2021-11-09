import React from "react";
import { Layout } from "./Layout";
import { LayoutSider } from "./LayoutSider";
import { LayoutMainNav } from "./LayoutMainNav";
import { LayoutContent } from "./LayoutContent";
import { LayoutTopNav } from "./LayoutTopNav";
import { SLayoutWrapper } from "./styles/SLayoutWrapper";
import { SLayoutContentWrapper } from "./styles/SLayoutContentWrapper";

function LayoutDemo(args) {
    return (
        <Layout 
            style={{
                backgroundColor: "lightgray", 
                color: "white",
                fontSize: "20px",
                lineHeight: 3
            }} 
            {...args}
        >
            <LayoutMainNav style={{backgroundColor: "#ffae03"}}>
                <p>nav</p>
            </LayoutMainNav>
            <SLayoutWrapper>
                <LayoutTopNav>
                    Nav bar
                </LayoutTopNav>
                <SLayoutContentWrapper>
                    <LayoutSider left={false}>
                        <p>Sider left, resizable side on right side</p>
                    </LayoutSider>
                    <LayoutContent style={{background: "darkslateblue"}}>
                        <p>Content</p>
                        {args.children}
                    </LayoutContent>
                    <LayoutSider left>
                        <p>Sider right, resizable side on left side</p>
                    </LayoutSider>
                </SLayoutContentWrapper>
            </SLayoutWrapper>

        </Layout>
    );
}

export default {
  title: 'Components/Layout',
  component: LayoutDemo,
};
const Template = (args) => 
    <LayoutDemo {...args}/>;

export const Default = Template.bind({});
Default.args = {};


// With LeftSider
export const LeftSider = ({content, ...args}) => (
    <Layout 
        style={{
            backgroundColor: "lightgray", 
            color: "white",
            fontSize: "20px",
            lineHeight: 3
        }} 
        {...args}
    >
        <LayoutMainNav style={{backgroundColor: "#ffae03"}}>
            <p>nav</p>
        </LayoutMainNav>
        <SLayoutWrapper>
            <LayoutTopNav>
                Nav bar
            </LayoutTopNav>
            <SLayoutContentWrapper>
                <LayoutSider left={false}>
                    <p>Resizable on right side</p>
                </LayoutSider>
                <LayoutContent style={{background: "darkslateblue"}}>
                    <p>Content</p>
                    {args.children}
                </LayoutContent>
            </SLayoutContentWrapper>
        </SLayoutWrapper>

    </Layout>
);

LeftSider.args = {};

// With RightSider
export const RightSider = ({content, ...args}) => (
    <Layout 
        style={{
            backgroundColor: "lightgray", 
            color: "white",
            fontSize: "20px",
            lineHeight: 3,
        }} 
        {...args}
    >
        <LayoutMainNav style={{backgroundColor: "#ffae03"}}>
            <p>nav</p>
        </LayoutMainNav>
        <SLayoutWrapper>
            <LayoutTopNav>
                Nav bar
            </LayoutTopNav>
            <SLayoutContentWrapper>
                <LayoutContent style={{background: "darkslateblue"}}>
                    <p>Content</p>
                    {args.children}
                </LayoutContent>
                <LayoutSider left>
                    <p>Resizable on left side</p>
                </LayoutSider>
            </SLayoutContentWrapper>
        </SLayoutWrapper>
    </Layout>
);

LeftSider.args = {};