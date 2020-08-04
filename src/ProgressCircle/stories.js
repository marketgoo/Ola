import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, radios, boolean } from '@storybook/addon-knobs'

import ProgressCircle from './'
import Tag from '../Tag'

storiesOf('ProgressCircle')
  .add('Label + value', () => (
    <figure>
      <ProgressCircle
        variant="warning"
        value="75"
        label="Your score" />
    </figure>
  ))
  .add('Busy with content', () => (
    <figure>
      <ProgressCircle
        variant="warning"
        value="75"
        busy="Checking your page..."
        label="Your score" />
    </figure>
  ))
  .add('Viewer', () => (
    <figure>
      <ProgressCircle
        variant={radios('Variant', ['null', 'error', 'success', 'warning'])}
        value={number('Value', 20)}
        busy={boolean('Busy', false)} />
    </figure>
  ))
  .add('Value + description', () => (
    <figure>
      <ProgressCircle
        variant="success"
        value="75"
        description="high" />
    </figure>
  ))
  .add('Label + Value + description', () => (
    <figure>
      <ProgressCircle
        variant="success"
        value="75"
        label="Your score"
        description="high" />
    </figure>
  ))
  .add('Value + description tag', () => (
    <figure>
      <ProgressCircle
        variant="error"
        value="34"
        description={<Tag size="small">low</Tag>} />
    </figure>
  ))
