import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'marketgoo',
  brandUrl: 'https://zeroheight.com/22mjgbuf6',
  brandImage: 'https://raw.githubusercontent.com/marketgoo/Ola/master/ola.png',

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

addons.setConfig({
  panelPosition: 'bottom',
  theme,
})
