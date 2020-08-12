import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

// global decorators
const themes = { 
  default: {},
  green: {'--accent': '#5BC500', '--accent-focus': '#5BC50033', '--accent-dark': '#449400'}
}

addDecorator(withKnobs)
addDecorator(story => <div className="ola" style={select('Theme', themes)}>{story()}</div>)
