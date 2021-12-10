import { Spinner } from "../..";

function SpinnerDemo() {
    return (
        <div>
          <Spinner />
        </div>
      );
}

export default {
  title: 'Components/Legacy/Spinner',
  component: SpinnerDemo,
};
const Template = (args) => <SpinnerDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

