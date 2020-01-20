import React from 'react'
import { storiesOf } from '@storybook/react'

import Metric from './'

storiesOf('Metric')
  .add('Default', () => (
    <figure><Metric title="Test Metric" description="Test metric lorem ipsum" value="299" /></figure>
  ))
  .add('Positive', () => (
    <figure><Metric title="Test Metric" description="Test metric success" value="Yes" variant="positive"/></figure>
  ))
  .add('Negative', () => (
    <figure><Metric title="Test Metric" description="Test metric error" value="No" variant="negative" /></figure>
  ))
  .add('Busy', () => (
    <figure><Metric title="Test Metric" description="Test metric without value" value="Loading" busy /></figure>
  ))
  .add('Positive with icon', () => (
    <figure><Metric title="Test Metric" description="Test metric with valueIcon" value="345" variant="positive" valueIcon /></figure>
  ))
  .add('Negative with icon', () => (
    <figure><Metric title="Test Metric" description="Test metric with valueIcon" value="0" variant="negative" valueIcon /></figure>
  ))
  .add('Unknow', () => (
    <figure><Metric title="Mobile Ready" description="Unable to access to your site from a mobile site" value="Unknow" variant="error"/></figure>
  ))
  .add('Alternative positive', () => (
    <figure>
      <Metric
        title="Do you have a blog?"
        footer={<>We found a Blog at <a href="#">http:blog.example.com</a></>}
        value="Yes"
        variant="positive"/>
    </figure>
  ))
  .add('Alternative negative', () => (
    <figure>
      <Metric
        title="Do you have a blog?"
        footer="Contact with us for more information"
        value="No"
        variant="negative"/>
    </figure>
  ))
  .add('Alternative busy', () => (
    <figure>
      <Metric
        title="Do you have a blog?"
        footer="Contact with us for more information"
        value="Loading"
        busy />
    </figure>
  ))
