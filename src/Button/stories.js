import React from 'react'
import Button from './'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    busy: { control: 'text' },
    as: { 
      control: {
        type: 'inline-radio',
        options: ['button', 'a', 'span']
      }
    }
  }
};

export const Base = (args) => <Button {...args}>{args.children}</Button>;
