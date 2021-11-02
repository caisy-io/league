import React, { useRef } from "react";
import { Layout} from "./Layout";
import { LayoutSider} from "./LayoutSider";

function LayoutDemo(args) {
    return (
        <Layout style={{backgroundColor: "lightgray"}} {...args}>
            <LayoutSider right>
                <p>Sider left, resizable right</p>
            </LayoutSider>
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

