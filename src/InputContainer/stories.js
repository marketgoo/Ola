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
  .add('Icon as suffix', () => (
    <InputContainer suffix={<Icon name="error" />} error={true} placeholder="Text placeholder" />
  ))
  .add('Long prefix', () => (
    <InputContainer prefix="Lorem ipsum dolor sit amet, consectetur adipiscing elit." placeholder="Text placeholder" />
  ))
  .add('Long suffix', () => (
    <InputContainer suffix="Lorem ipsum dolor sit amet, consectetur adipiscing elit." placeholder="Text placeholder" />
  ))
  