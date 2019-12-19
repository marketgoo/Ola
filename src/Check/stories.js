import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, radios } from '@storybook/addon-knobs'

import Check from './'

storiesOf('Check')
  .add('Default', () => (
    <>
      <figure><Check>Check</Check></figure>
      <figure><Check>Check <a href="#">with a link</a></Check></figure>
      <figure><Check type="radio" name="name">Check Radio</Check></figure>
      <figure><Check type="radio" name="name">Check Radio <a href="#">with a link</a></Check></figure>
    </>
  ))
  .add('Area', () => (
    <>
      <figure>
        <Check variant="area">
          <strong className="ola-callout">Test 1</strong>
          <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
        </Check>
      </figure>
      <figure>
        <Check variant="area" type="radio" name="name">
          <strong className="ola-callout">Test 2</strong>
          <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
        </Check>
      </figure>
      <figure>
        <Check variant="area" type="radio" name="name">
          <strong className="ola-callout">Test 3</strong>
          <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet <a href="#">with a link</a></p>
        </Check>
      </figure>
    </>
  ))
  .add('Option', () => (
    <figure>
      <Check variant="option">Test 1</Check>
      <Check variant="option" type="radio" name="name">Test 2</Check>
      <Check variant="option" type="radio" name="name">Test 3</Check>
    </figure>
  ))
  .add('Viewer', () => (
    <figure>
      <Check
        type={radios('Type', ['radio', 'checkbox'], 'radio')}
        disabled={boolean('Disabled', false)}
        onChange={action('onChange event')}
      >{ text('Label', 'Check') }
      </Check>
    </figure>
  ))

