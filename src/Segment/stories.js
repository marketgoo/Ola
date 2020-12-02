import React from 'react'
import Button from '../Button'
import Segment from './'

export default {
  title: 'Segment',
  component: Segment
}

export const Base = (args) => <Segment {...args}>
  <Button selected variant='secondary'>All keywords</Button>
  <Button selected={false} variant='secondary'>Only focus keywords</Button>
</Segment>

Base.argTypes = {
  children: { control: { disable: true }}
}