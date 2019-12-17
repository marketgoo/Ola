import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, select } from '@storybook/addon-knobs'

const themes = { 
  default: {},
  green: {'--accent': '#5BC500', '--accent-focus': '#5BC50033', '--accent-dark': '#449400'}
}

export default function (name) {
  return storiesOf(name, module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .addDecorator(story => <div className="ola" style={select('Theme', themes)}>{story()}</div>)
}