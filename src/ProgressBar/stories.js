import React from 'react'
import { storiesOf } from '@storybook/react'

import ProgressBar from './'

storiesOf('ProgressBar')
  .add('Progress element', () => (
    <div>
      <figure><ProgressBar value="20" max="100" /></figure>
      <figure><ProgressBar value="50" max="100">Loading...</ProgressBar></figure>
      <figure>
        <ProgressBar value="80" max="100" descriptionPosition="right">
          <strong>20%</strong> completed
        </ProgressBar>
      </figure>
    </div>
  ))
  .add('Meter element', () => (
    <div>
      <figure><ProgressBar as="meter" value="120" min="100" max="200" low="130" /></figure>
      <figure><ProgressBar as="meter" value="150" min="100" max="200">150 / 200</ProgressBar></figure>
      <figure>
        <ProgressBar as="meter" value="180" min="100" max="200" descriptionPosition="right">
          <strong>180 / 200</strong>
        </ProgressBar>
      </figure>
    </div>
  ))