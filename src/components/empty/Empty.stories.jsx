import React from "react";
import { Empty } from "../..";

function EmptyDemo() {
    return <Empty description="No Data" />;
}

export default {
  title: 'Components/Empty',
  component: EmptyDemo,
};
const Template = (args) => <EmptyDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

