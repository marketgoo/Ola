import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Metric } from '../dist'

storiesOf('Metric', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered-inner">
      <Metric title="Test Metric" description="Test metric lorem ipsum" value="299" />
      <Metric title="Test Metric" description="Test metric success" value="Yes" variant="positive"/>
      <Metric title="Test Metric" description="Test metric error" value="No" variant="negative" />
      <Metric title="Test Metric" description="Test metric without value" value="Loading" busy />
      <Metric title="Test Metric" description="Test metric with valueIcon" value="345" variant="positive" valueIcon />
      <Metric title="Test Metric" description="Test metric with valueIcon" value="0" variant="negative" valueIcon />
      <Metric title="Mobile Ready" description="Unable to access to your site from a mobile site" value="Unknow" variant="error"/>
    </div>
  ))
  .add('Alternative', () => (
    <div className="preview-centered-inner">
      <Metric
        title="Do you have a blog?"
        footer={'We found a Blog at <a href="#">http:blog.example.com</a>'}
        htmlFooter
        value="Yes"
        variant="positive"/>
      <Metric
        title="Do you have a blog?"
        footer="Contact with us for more information"
        value="No"
        variant="negative"/>
      <Metric
        title="Do you have a blog?"
        footer="Contact with us for more information"
        value="Loading"
        busy />
    </div>
  ))
