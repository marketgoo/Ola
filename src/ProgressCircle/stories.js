import React from 'react'
import ProgressCircle from './'
import Tag from '../Tag'

export default {
  title: 'ProgressCircle',
  component: ProgressCircle,
  args: {
    value: 34,
    description: '',
    busy: '',
  }
}

export const Base = (args) => <ProgressCircle {...args}/>
export const WithTag = () => <ProgressCircle
  variant="error"
  value="34"
  description={<Tag size="small" variant="error">low</Tag>} />
