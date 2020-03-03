import React from 'react'
import { storiesOf } from '@storybook/react'

import InputContainer from './'
import Icon from '../Icon'

storiesOf('InputContainer')
  .add('Empty', () => (
    <InputContainer prefix="https://" placeholder="Text placeholder" />
  ))
  .add('Icon as prefix', () => (
    <InputContainer prefix={<Icon name="error" />} error={true} placeholder="Text placeholder" />
  ))
  .add('Empty disabled', () => (
    <InputContainer placeholder="Text placeholder" disabled />
  ))
  .add('Filled', () => (
    <InputContainer defaultValue="louis@gmail.com" />
  ))
  .add('Textarea', () => (
    <InputContainer type="textarea" />
  ))