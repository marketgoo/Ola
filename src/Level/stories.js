import React from 'react'
import Level from './'
import Page from '../Page'

export default {
  title: 'Level',
  component: Level
}

export const Base = (args) => <Level {...args}/>
export const Background = (args) => <div className="ola-bg"><Level {...args} /></div>
export const InPage = (args) => <Page url="test.com" title="test.com" icon={<Level {...args} />} {...args}/>