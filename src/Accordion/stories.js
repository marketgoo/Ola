import React from 'react'

import create from '../create'

import Accordion from './'

create('Accordion')
  .add('Default', () => (
    <figure>
      <Accordion title="See more">
        <p>Lorem ipsum dolor sit amet</p>
      </Accordion>
    </figure>
  ))
  .add('Default open', () => (
    <figure>
      <Accordion title="See more" open={true}>
        <p>Lorem ipsum dolor sit amet</p>
      </Accordion>
    </figure>
  ))
  