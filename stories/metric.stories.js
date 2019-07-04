import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Metric } from '../dist'

storiesOf('Metric', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered-inner">
      <Metric title="Test Metric"  description="Test metric lorem ipsum" value="299" />
      <Metric title="Test Metric"  description="Test metric success" value="Yes" variant="success"/>
      <Metric title="Test Metric"  description="Test metric error" value="No" variant="error" />
      <Metric title="Test Metric"  description="Test metric without value" value="Loading" busy />
      <Metric title="Test Metric"  description="Test metric with valueIcon" value="Ok" variant="success" valueIcon />
      <Metric title="Test Metric"  description="Test metric with valueIcon" value="Fail" variant="error" valueIcon />
      <Metric title="Mobile Ready"  description="Unable to access to your site from a mobile site" value="Unknow" variant="warning"/>
    </div>
  ))
