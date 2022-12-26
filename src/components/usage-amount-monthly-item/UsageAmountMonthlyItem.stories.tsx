import React from "react";
import { UsageAmountMonthlyItem } from "./UsageAmountMonthlyItem";

const USAGE_ITEM_DATA = {
  used: 67,
  maxBlueprints: 95,
};

const USAGE_ITEM_CONTENT = {
  title: "Blueprints",
  usage: "${1} of ${2} available blueprints used",
  description: {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: `The amount of data your projects have sent or received. Lorem ipsum dolor set amet lorem ipsum dolor. Learn more `,
      },
    ],
  },
};

const Template = () => {
  const splitString = USAGE_ITEM_CONTENT.usage.split(/\${(\w+)}/g);
  let messageString = "";

  splitString.forEach((string) => {
    if (string.length === 0) return;

    if (string === "1") {
      console.log("asdad");
      messageString += `${USAGE_ITEM_DATA.used}`;
    } else if (string === "2") {
      messageString += `${USAGE_ITEM_DATA.maxBlueprints}`;
    } else {
      messageString += string;
    }
  });

  return (
    <UsageAmountMonthlyItem
      title={USAGE_ITEM_CONTENT.title}
      usage={messageString}
      used={USAGE_ITEM_DATA.used}
      max={USAGE_ITEM_DATA.maxBlueprints}
    >
      <p>The amount of data your projects have sent or received. Lorem ipsum dolor set amet lorem ipsum dolor.</p>
      <br></br>
      <a>Learn more</a>
    </UsageAmountMonthlyItem>
  );
};

export default {
  title: `Components/UsageAmountMonthlyItem`,
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
