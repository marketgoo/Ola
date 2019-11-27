import React from 'react'

import create from './create'
import { Metric } from '../dist'

create('Metric')
  .add('All', () => (
    <div>
      <figure><Metric title="Test Metric" description="Test metric lorem ipsum" value="299" /></figure>
      <figure><Metric title="Test Metric" description="Test metric success" value="Yes" variant="positive"/></figure>
      <figure><Metric title="Test Metric" description="Test metric error" value="No" variant="negative" /></figure>
      <figure><Metric title="Test Metric" description="Test metric without value" value="Loading" busy /></figure>
      <figure><Metric title="Test Metric" description="Test metric with valueIcon" value="345" variant="positive" valueIcon /></figure>
      <figure><Metric title="Test Metric" description="Test metric with valueIcon" value="0" variant="negative" valueIcon /></figure>
      <figure><Metric title="Mobile Ready" description="Unable to access to your site from a mobile site" value="Unknow" variant="error"/></figure>
    </div>
  ))
  .add('Alternative', () => (
    <div>
      <figure>
        <Metric
          title="Do you have a blog?"
          footer={'We found a Blog at <a href="#">http:blog.example.com</a>'}
          htmlFooter
          value="Yes"
          variant="positive"/>
      </figure>
      <figure>
        <Metric
          title="Do you have a blog?"
          footer="Contact with us for more information"
          value="No"
          variant="negative"/>
      </figure>
      <figure>
        <Metric
          title="Do you have a blog?"
          footer="Contact with us for more information"
          value="Loading"
          busy />
      </figure>
    </div>
  ))
