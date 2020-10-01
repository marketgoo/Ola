import React from 'react'
import Kpi from './'
import renderer from 'react-test-renderer'

it('Default Kpi', () => {
  const tree = renderer
    .create(<Kpi 
      title='Estimated monthly visits comming from search engines'
      value='166 visits'
      description='55% more than in May'
      variant='positive'
      loading={false}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Kpi Loading', () => {
  const tree = renderer
    .create(<Kpi 
      title='Estimated monthly visits comming from search engines'
      value='166 visits'
      description='55% more than in May'
      variant='positive'
      loading={true}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})