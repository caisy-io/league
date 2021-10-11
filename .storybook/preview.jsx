import React from 'react';


import {GSBase} from '../src/constants/styles/global-style';

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GSBase />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}