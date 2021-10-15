import { Skeleton } from "../..";


function SkeletonDemo() {
    return <Skeleton />;
}

export default {
  title: 'Components/Skeleton',
  component: SkeletonDemo,
};
const Template = (args) => <SkeletonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
