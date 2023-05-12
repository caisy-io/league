import React from "react";
import { AssetImageCardSkeleton } from "./AssetImageCardSkeleton";

export default {
  title: `Components/Cards/AssetImageCardSkeleton`,
  component: AssetImageCardSkeletonDemo,
  argTypes: {
    width: {
      description: "width",
      control: { type: "number" },
      table: {
        defaultValue: 300,
      },
    },
    height: {
      description: "height",
      control: { type: "number" },
      table: {
        defaultValue: 200,
      },
    },
  },
};

function AssetImageCardSkeletonDemo({ width, height }) {
//  return <div style={{width: width+"px", height: height + "px"}}>
//   <AssetImageCardSkeleton width={width} height={height}/>
// </div>

 return <div style={{display: "flex", gap: "12px", flexDirection: "column"}}>
  <div style={{display: "flex", gap: "12px"}}>
  <div style={{width: width+"px", height: height + "px"}}>
   <AssetImageCardSkeleton width={width} height={height}/>
 </div>
 <div style={{width: width+"px", height: height + "px"}}>
   <AssetImageCardSkeleton width={width} height={height}/>
 </div>
 <div style={{width: width+"px", height: height + "px"}}>
   <AssetImageCardSkeleton width={width} height={height}/>
 </div>
  </div>
  <div style={{display: "flex", gap: "12px"}}>
  <div style={{width: width+"px", height: height + "px"}}>
   <AssetImageCardSkeleton width={width} height={height}/>
 </div>
 <div style={{width: width+"px", height: height + "px"}}>
   <AssetImageCardSkeleton width={width} height={height}/>
 </div>
  </div>
</div>
}

const Template = (args) => < AssetImageCardSkeletonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 300,
  height: 200,
};

