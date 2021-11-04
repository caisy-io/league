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
        <Layout style={{backgroundColor: "lightgray"}} {...args}>
            <LayoutMainNav>
                <p>nav</p>
            </LayoutMainNav>
            <SLayoutWrapper className="container">
                <LayoutTopNav>
                    Nav bar
                </LayoutTopNav>
                <SLayoutContentWrapper className="content">
                    <LayoutContent>{args.children}</LayoutContent>
                    <LayoutSider left={false}>
                        <p>Resizable on right side</p>
                    </LayoutSider>
                    <LayoutSider left>
                        <p>Resizable on left side</p>
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

