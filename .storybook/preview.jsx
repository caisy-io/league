import { GSBase } from "../src/constants/styles/global-style";

const customViewports = {
  Bronze: {
    name: "Bronze",
    styles: {
      width: "640px",
      height: "100%",
    },
  },
  Silver: {
    name: "Silver",
    styles: {
      width: "768px",
      height: "100%",
    },
  },
  Gold: {
    name: "Gold",
    styles: {
      width: "1280px",
      height: "100%",
    },
  },
  Platinum: {
    name: "Platinum",
    styles: {
      width: "1440px",
      height: "100%",
    },
  },
  Diamond: {
    name: "Diamond",
    styles: {
      width: "1920px",
      height: "100%",
    },
  },
  iphoneX: {
    name: "iPhone X",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  ipad: {
    name: "iPad",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  ipadMini: {
    name: "iPad landscape",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  pixel: {
    name: "Google Pixel",
    styles: {
      width: "412px",
      height: "732px",
    },
  },
};

/** @type { import('@storybook/react').Preview } */
export const parameters = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: { viewports: customViewports, defaultViewport: "Gold" },
    backgrounds: {
      values: [
        { name: "Light", value: "#F8F8F8" },
        { name: "Dark", value: "#333333" },
        { name: "White", value: "#ffffff" },
      ],
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.sb-show-main.sb-main-padded{padding:0 !important;}` }} />
      <GSBase />
      <Story />
    </>
  ),
];
