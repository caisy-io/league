import React from "react";
import { Layout} from "./Layout";
import { LayoutHeader} from "./LayoutHeader";
import { LayoutContent} from "./LayoutContent";
import { LayoutSider} from "./LayoutSider";

function LayoutDemo(args) {
    return (
        <Layout style={{backgroundColor: "lightgray"}} {...args}>
            <LayoutSider left>
                <p>Sider left</p>
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

