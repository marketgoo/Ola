import React from 'react'
import Accordion from './'
import Tag from '../Tag'

export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    title: 'This is the title',
    children: 'This is the content'
  },
  argTypes: {
    open: {control: 'boolean'}
  }
};

export const Base = (args) => <Accordion { ...args}>{args.children}</Accordion>

export const Counter = () => 
  <Accordion title={<>This is the title<Tag>23</Tag></>}>
    <p>This is the content</p>
  </Accordion>
