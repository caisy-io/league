import React from "react";
import { averageNumber, UsageChartCard } from ".";
import numbro from "numbro";
import languages from "numbro/dist/languages.min";

const USAGE_ITEM_DATA = {
  used: 20000000,
  maxBlueprints: 20000000,
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
  { date: "1 Nov", used: 10 },
  { date: "2 Nov", used: 20 },
  { date: "3 Nov", used: 30 },
  { date: "4 Nov", used: 40 },
  { date: "5 Nov", used: 50 },
  { date: "6 Nov", used: 60 },
  { date: "7 Nov", used: 70 },
  { date: "8 Nov", used: 80 },
  { date: "9 Nov", used: 90 },
  { date: "10 Nov", used: 10000000 },
  { date: "11 Nov", used: 15 },
  { date: "12 Nov", used: 25 },
  { date: "13 Nov", used: 35 },
  { date: "14 Nov", used: 45 },
  { date: "15 Nov", used: 55 },
  { date: "16 Nov", used: 65 },
  { date: "17 Nov", used: 75 },
  { date: "18 Nov", used: 85 },
  { date: "19 Nov", used: 95 },
  { date: "20 Nov", used: 100 },
  { date: "21 Nov", used: 66 },
  { date: "22 Nov", used: 66 },
  { date: "23 Nov", used: 66 },
  { date: "24 Nov", used: 66 },
  { date: "25 Nov", used: 66 },
  { date: "26 Nov", used: 66 },
  { date: "27 Nov", used: 66 },
  { date: "28 Nov", used: 66 },
  { date: "29 Nov", used: 66 },
  { date: "30 Nov", used: 66 },
  { date: "31 Nov", used: 66 },
];

const Template = () => {
  const splitString = USAGE_ITEM_CONTENT.usage.split(/\${(\w+)}/g);
  let messageString = "";

  const locale = "en";

  numbro.registerLanguage({ ...languages["es-ES"], languageTag: "es" });
  numbro.registerLanguage({ ...languages["de-DE"], languageTag: "de" });

  numbro.setLanguage(locale);

  splitString.forEach((string) => {
    if (string.length === 0) return;

    if (string === "1") {
      messageString += `${averageNumber(USAGE_ITEM_DATA.used)}`;
    } else if (string === "2") {
      messageString += `${averageNumber(USAGE_ITEM_DATA.maxBlueprints)}`;
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
      locale={locale}
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
