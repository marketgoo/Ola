import React from 'react'
import Level from './'

export default {
  title: 'Level',
  component: Level
}

export const Base = (args) => <Level {...args}/>
export const Background = (args) => <div className="ola-bg"><Level {...args}/></div>
export const BackgroundHover = (args) => <div className="ola-bg-hover"><Level {...args}/></div>
