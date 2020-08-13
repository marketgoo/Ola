import React from 'react'
import CheckGroup from './'
import Check from '../Check'

export default {
  title: 'CheckGroup',
  component: CheckGroup
}

export const Base = (args) => <CheckGroup {...args}>
  <Check variant={args.checkVariant}>
    <strong className="ola-callout">Test 1</strong>
    <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
  </Check>
  <Check variant={args.checkVariant}>
    <strong className="ola-callout">Test 1</strong>
    <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
  </Check>
  <Check variant={args.checkVariant}>
    <strong className="ola-callout">Test 1</strong>
    <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
  </Check>
</CheckGroup>

Base.args = {
  checkVariant: 'area'
}
Base.argTypes = {
  checkVariant: {
    control: {
      type: 'select',
      options: ['area', 'option']
    }
  }
}

export const List = () => <CheckGroup variant="list">
  {new Array(11).fill().map((v, key) => (
    <Check key={key} value={key} variant="option">
        Test {key}
    </Check>
  ))}
</CheckGroup>
