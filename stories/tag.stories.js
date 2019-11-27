import React from 'react'

import create from './create'

import { Tag } from '../dist'

create('Tag')
  .add('All', () => (
    <div>
      <figure><Tag>Default Tag</Tag></figure>
      <figure><Tag variant='invert'>Invert Tag</Tag></figure>
      <figure><Tag variant='success'>Sucess Tag</Tag></figure>
      <figure><Tag variant='warning'>Warning Tag</Tag></figure>
      <figure><Tag variant='error'>Error Tag</Tag></figure>
      <figure><Tag variant='pro'>Pro Tag</Tag></figure>
    </div>
  ))
