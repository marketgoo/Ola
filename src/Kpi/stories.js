import React from 'react'
import Kpi from './'

export default {
  title: 'Kpi',
  component: Kpi,
  args: {
    title: 'Estimated monthly visits comming from search engines',
    value: '166 visits',
    description: '55% more than in May'
  }
}

export const Base = (args) => 
    <div className="ola_ly-columns">
        <div>
            <Kpi {...args}/>
        </div>
        <div>
            <Kpi {...args}/>
        </div>
    </div>
    