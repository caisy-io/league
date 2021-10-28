import React from "react";
import { Layout, LayoutHeader, LayoutContent, LayoutSider } from "../..";

function LayoutDemo(args) {
    return (
        <Layout style={{backgroundColor: "red"}} {...args}>
            <LayoutHeader></LayoutHeader>
            <LayoutSider></LayoutSider>
            <LayoutContent></LayoutContent>
            <LayoutSider></LayoutSider>
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

