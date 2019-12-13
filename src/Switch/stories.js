import React from 'react'

import create from '../create'

import Switch from './'

create('Switch')
  .add('Default', () => (
    <figure><Switch label="Switch" /></figure>
  ))
  .add('With link', () => (
    <figure><Switch label="Switch&nbsp;<a href='#'>with link</a>" htmlLabel /></figure>
  ))
