import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { ProgressBar } from '../dist'

storiesOf('Progress Bar', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Progress element', () => (
    <div className="preview-centered-inner">
      <ProgressBar value="20" max="100" />
      <ProgressBar value="50" max="100" description="Loading..." />
      <ProgressBar value="80" max="100" htmlDescription description="<strong>20%</strong> completed" descriptionPosition="right" />
    </div>
  ))
  .add('Meter element', () => (
    <div className="preview-centered-inner">
      <ProgressBar as="meter" value="120" min="100" max="200" low="130" />
      <ProgressBar as="meter" value="150" min="100" max="200" description="150 / 200" />
      <ProgressBar as="meter" value="180" min="100" max="200" htmlDescription description="<strong>180 / 200</strong>" descriptionPosition="right" />
    </div>
  ))
