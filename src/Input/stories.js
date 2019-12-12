import React from 'react'

import create from '../create'

import Input from './'

create('Input')
  .add('Empty', () => (
    <Input placeholder="Text placeholder" />
  ))
  .add('Empty Error', () => (
    <Input error={true} placeholder="Text placeholder" />
  ))
  .add('Empty disabled', () => (
    <Input placeholder="Text placeholder" disabled />
  ))
  .add('Filled', () => (
    <Input defaultValue="louis@gmail.com" />
  ))
  .add('Textarea', () => (
    <Input type="textarea" />
  ))