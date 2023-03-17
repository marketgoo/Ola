import React, { useState } from 'react'
import SearchField from './'

export default {
  title: 'SearchField',
  component: SearchField,
  args: {
    id: 'search',
    placeholder: 'Search by name',
    description: '',
  },
  argTypes: {
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
}

export const Base = (args) => <SearchField {...args} />

export const ClearInput = (args) => {
  const [value, setValue] = useState('pepe')
  return (
    <SearchField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onRemove={() => setValue('')}
    />
  )
}
