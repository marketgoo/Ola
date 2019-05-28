import { addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'

const gooTheme = create({
  base: 'light',
  brandTitle: 'marketgoo',
  brandUrl: 'https://zeroheight.com/22mjgbuf6',
  brandImage: './ola.svg',

  colorPrimary: '#0090DA',
  colorSecondary: '#0090DA',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#F0F2F4',
  appBorderRadius: 0,

  // Typography
  fontBase: '-apple-system, system-ui, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2C333E',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#BBC2CE',
  barSelectedColor: '#0090DA',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})

addParameters({
  options: {
    theme: gooTheme
  }
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
