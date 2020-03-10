import React from 'react'
import { storiesOf } from '@storybook/react'

import Accordion from './'
import Tag from '../Tag'

storiesOf('Accordion')
  .add('Default', () => (
    <figure>
      <Accordion title="See more">
        <p>Lorem ipsum dolor sit amet</p>
      </Accordion>
    </figure>
  ))
  .add('Counter', () => (
    <figure>
      <Accordion title={
        <>
            This is the title
          <Tag>23</Tag>
        </>
      }>
        <p>Lorem ipsum dolor sit amet</p>
      </Accordion>
    </figure>
  ))
  .add('Default open', () => (
    <figure>
      <Accordion title="Opened" open={true}>
        <p>Lorem ipsum dolor sit amet</p>
      </Accordion>
    </figure>
  ))
  