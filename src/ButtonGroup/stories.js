import React from 'react'
import Button from '../Button'
import ButtonGroup from './'
import Tooltip from '../Tooltip'

export default {
  title: 'ButtonGroup',
  component: ButtonGroup
}

export const Base = (args) => <ButtonGroup {...args} style={{width: '500px', border: 'solid 1px'}}>
  <Button variant='primary'>Accept</Button>
  <Button variant='secondary'>Cancel</Button>
  <strong>Foo</strong>
  <Tooltip trigger={<Button as="span" variant="secondary">Open tooltip</Button>}>Content</Tooltip>
</ButtonGroup>

Base.argTypes = {
  children: { control: { disable: true }}
}