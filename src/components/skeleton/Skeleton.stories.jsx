import { Skeleton } from "../skeleton";


function SkeletonDemo() {
    return <Skeleton />;
}

export default {
  title: 'Components/Legacy/Skeleton',
  component: SkeletonDemo,
};
const Template = (args) => <SkeletonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
