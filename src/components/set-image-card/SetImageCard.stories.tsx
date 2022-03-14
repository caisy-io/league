import React from "react";
import { SetImageCard } from "./SetImageCard";

export default {
  title: `Components/Cards/SetImageCard`,
  component: SetImageCard,
};

const processImageMock = (file: File) => {
  if (file) {
    // We're gonna need it later when we send it to server
    // const imageUrl = URL.createObjectURL(file);

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

const Template = () => <SetImageCard onChange={onChangeMock} processImage={processImageMock} />;

export const Default = Template.bind({});