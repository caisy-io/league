import React from "react";
import { SetImageCard } from "./SetImageCard";

export default {
  title: `Components/Cards/SetImageCard`,
  component: SetImageCardDemo,
};

const processImageMock = (file: File) => {
  if (file) {
    const imageUrl = URL.createObjectURL(file);

    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?cs=srgb&dl=pexels-kaique-rocha-775201.jpg&fm=jpg");
      }, 1000);
    });
  }
};

const onChangeMock = (url: string) => {
  console.log("url changed -> ", url);
};

function SetImageCardDemo(args) {
  return <SetImageCard onChange={onChangeMock} processImage={processImageMock}></SetImageCard>;
}

const Template = (args) => <SetImageCardDemo {...args} />;

export const Default = Template.bind({});

Default.args = {};
