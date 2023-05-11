import React from "react";
import { JustifiedImageGrid } from './JustifiedImageGrid';
import {getImages} from './testdata';

export default {
  title: `Components/JustifiedImageGrid`,
  component: JustifiedImageGrid,
  argTypes: {
    number: {
      description: "An example number argument type",
      control: { type: "number" },
      table: {
        defaultValue: 1,
      },
    },
  },
};

const JustifiedImageGridDemo: React.FC<{ number }> = ({ number }) => {
  const images = getImages();

  console.log(` images`, JSON.stringify(images, ));
  return (
    <JustifiedImageGrid images={images} rowHeight={300}/>
)};

export const Default: any = JustifiedImageGridDemo.bind({});
Default.args = {
  number: 1,
};
