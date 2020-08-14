import React from 'react'
import SearchField from './'

export default {
  title: 'SearchField',
  component: SearchField,
  args: {
    id: 'search',
    placeholder: 'Search by name',
    description: ''
  },
  argTypes: {
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  }
}

export const Base = (args) => <SearchField {...args}/>
