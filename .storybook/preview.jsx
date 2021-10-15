const customViewports = {
  small: {
    name: 'Small',
    styles: {
      width: '640px',
      height: '100%'
    }
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '768px',
      height: '100%'
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: '1024px',
      height: '100%'
    },
  },
  xl: {
    name: 'Extra Large',
    styles: {
      width: '1280px',
      height: '100%'
    },
  },
  '2xl': {
    name: '2 XL',
    styles: {
      width: '1536px',
      height: '100%'
    },
  },
  'iphoneX': {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px'
    }
  },
  ipad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  ipadPro: {
    name: 'iPad Pro',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  ipadMini: {
    name: 'iPad Mini',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  pixel: {
    name: 'Google Pixel',
    styles: {
      width: '412px',
      height: '732px'
    }
  },
  galaxyS5: {
    name: 'Galaxy S7 (and below)',
    styles: {
      width: '360px',
      height: '640px'
    }
  },
  galaxyS8: {
    name: 'Galaxy S8 (and up)',
    styles: {
      width: '360px',
      height: '740px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports, defaultViewport: 'xl' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}