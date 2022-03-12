import React from "react";
import { AvatarInput } from "./AvatarInput";

export default {
  title: `Components/AvatarInput`,
  component: AvatarInput,
  argTypes: {
    imageUrl: {
      description: "Pre-defined url for avatar",
      control: { type: "text" },
    },
    children: {
      description: "Alt text for avatar without pre-defined url",
      control: { type: "text" },
    },
  },
};
const processImageMock = (file: File) => {
  if (file) {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(
          "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-kaique-rocha-775201.jpg&fm=jpg",
        );
      }, 3000);
    });
  }
};

const onChangeMock = (url: string) => {
  console.log("url changed -> ", url);
};

const Template = (args) => <AvatarInput onChange={onChangeMock} processImage={processImageMock} {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "WB",
};

export const WithImage = Template.bind({});

WithImage.args = {
  children: "WB",
  imageUrl:
    "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80",
};
