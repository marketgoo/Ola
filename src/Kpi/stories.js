import React from 'react'
import Kpi from './'

export default {
  title: 'Kpi',
  component: Kpi,
  args: {
    title: 'Estimated monthly visits comming from search engines',
    value: '166 visits',
    description: '55% more than in May',
    variant: 'positive'
  }
}

export const Base = (args) => <Kpi {...args} />

export const WithTag = () => 
    <div className="ola_ly-columns">
        <div>
            <Kpi 
              value={<p style={{margin: 0}}><img src="http://lorempixel.com/300/100/"/></p> }
              title={<p style={{margin: 0}}>Estimated <strong>monthly</strong> visits comming from search engines</p>} 
              description={<p style={{margin: 0}}>Estimated monthly visits comming from search engines</p>}
              variant="negative" />

        </div>
        <div>
            <Kpi 
              value="Value Test"
              title={<p style={{margin: 0}}>Estimated <strong>monthly</strong> visits comming from search engines</p>} 
              description={<p style={{margin: 0}}>Estimated monthly visits comming from search engines</p>}
              variant="positive" />
        </div>
    </div>