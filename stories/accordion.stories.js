import React from 'react'

import create from './create'

import { Accordion } from '../dist'
import { Tag } from '../dist'

create('Accordion')
  .add('Default', () => (
    <Accordion title={
      <>
        This is the title
        <Tag>23</Tag>
      </>
    }>
        <p>Lorem ipsum</p>
    </Accordion>
  ))
