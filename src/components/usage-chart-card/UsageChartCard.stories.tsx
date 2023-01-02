import React from "react";
import { UsageChartCard } from "./UsageChartCard";

const USAGE_ITEM_DATA = {
  used: 67,
  maxBlueprints: 100,
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

const CHART_DATA = [
  { date: "1 Nov", percentageUsed: 10 },
  { date: "2 Nov", percentageUsed: 20 },
  { date: "3 Nov", percentageUsed: 30 },
  { date: "4 Nov", percentageUsed: 40 },
  { date: "5 Nov", percentageUsed: 50 },
  { date: "6 Nov", percentageUsed: 60 },
  { date: "7 Nov", percentageUsed: 70 },
  { date: "8 Nov", percentageUsed: 80 },
  { date: "9 Nov", percentageUsed: 90 },
  { date: "10 Nov", percentageUsed: 100 },
  { date: "11 Nov", percentageUsed: 15 },
  { date: "12 Nov", percentageUsed: 25 },
  { date: "13 Nov", percentageUsed: 35 },
  { date: "14 Nov", percentageUsed: 45 },
  { date: "15 Nov", percentageUsed: 55 },
  { date: "16 Nov", percentageUsed: 65 },
  { date: "17 Nov", percentageUsed: 75 },
  { date: "18 Nov", percentageUsed: 85 },
  { date: "19 Nov", percentageUsed: 95 },
  { date: "20 Nov", percentageUsed: 100 },
  { date: "21 Nov", percentageUsed: 66 },
  { date: "22 Nov", percentageUsed: 66 },
  { date: "23 Nov", percentageUsed: 66 },
  { date: "24 Nov", percentageUsed: 66 },
  { date: "25 Nov", percentageUsed: 66 },
  { date: "26 Nov", percentageUsed: 66 },
  { date: "27 Nov", percentageUsed: 66 },
  { date: "28 Nov", percentageUsed: 66 },
  { date: "29 Nov", percentageUsed: 66 },
  { date: "30 Nov", percentageUsed: 66 },
  { date: "31 Nov", percentageUsed: 66 },
];

const Template = () => {
  const splitString = USAGE_ITEM_CONTENT.usage.split(/\${(\w+)}/g);
  let messageString = "";

  splitString.forEach((string) => {
    if (string.length === 0) return;

    if (string === "1") {
      messageString += `${USAGE_ITEM_DATA.used}`;
    } else if (string === "2") {
      messageString += `${USAGE_ITEM_DATA.maxBlueprints}`;
    } else {
      messageString += string;
    }
  });

  return (
    <UsageChartCard
      title={USAGE_ITEM_CONTENT.title}
      usage={messageString}
      used={USAGE_ITEM_DATA.used}
      max={USAGE_ITEM_DATA.maxBlueprints}
      i18n={{ used: "Used", totalAvailable: "Total available" }}
      identifier="members"
      chartData={CHART_DATA}
    >
      <p>The amount of data your projects have sent or received. Lorem ipsum dolor set amet lorem ipsum dolor.</p>
      <br></br>
      <a>Learn more</a>
    </UsageChartCard>
  );
};

export default {
  title: `Components/UsageChartCard`,
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
