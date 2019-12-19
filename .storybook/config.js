import React from 'react'
import { addParameters, addDecorator, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, select } from '@storybook/addon-knobs'

//Theme
const gooTheme = create({
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

addParameters({
  options: {
    theme: gooTheme
  }
});

// global decorators
const themes = { 
  default: {},
  green: {'--accent': '#5BC500', '--accent-focus': '#5BC50033', '--accent-dark': '#449400'}
}

addDecorator(withKnobs)
addDecorator(withInfo)
addDecorator(story => <div className="ola" style={select('Theme', themes)}>{story()}</div>)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories\.js$/);

configure(
  () => req.keys().forEach(filename => req(filename)),
  module
);
