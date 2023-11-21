import React from "react";
import { Button } from "../button";
import { IconError } from "../../icons";
import { Popconfirm } from "./Popconfirm";

function PopconfirmDemo() {
    const onConfirm = () => {
        console.log("Confirm");
      };
    
      const onCancel = () => {
        console.log("Canceled");
      };
    
      const title = "Are you sure to delete this item?";
      const description = 'You are going to delete this item';
      const message = <><IconError /> Item was used in 14 documents</>;
    
      return (
        <div
          style={{
            margin: 32,
            display: "flex",
            flexDirection: "column",
            gap: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Popconfirm message={message} placement="right" onCancel={onCancel} onConfirm={onConfirm} title={title} description={description}>
            <Button>Right</Button>
          </Popconfirm>
          <Popconfirm message={message} placement="left" onCancel={onCancel} onConfirm={onConfirm} title={title} description={description}>
            <Button>Left</Button>
          </Popconfirm>
          <Popconfirm message={message} placement="top" onCancel={onCancel} onConfirm={onConfirm} title={title} description={description}>
            <Button>Top</Button>
          </Popconfirm>
          <Popconfirm message={message} placement="bottom" onCancel={onCancel} onConfirm={onConfirm} title={title} description={description}>
            <Button>Bottom</Button>
          </Popconfirm>
        </div>
      );
}

export default {
  title: 'Components/Legacy/Popconfirm',
  component: PopconfirmDemo,
};
const Template = (args) => <PopconfirmDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

