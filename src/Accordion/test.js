import React from 'react'
import Accordion from './'
import renderer from 'react-test-renderer'

it('Default accordion', () => {
  const tree = renderer
    .create(<Accordion title="See more">Lorem ipsum dolor sit amet</Accordion>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Open accordion', () => {
  const tree = renderer
    .create(<Accordion title="See more" open>Lorem ipsum dolor sit amet</Accordion>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Accordion with extra class', () => {
  const tree = renderer
    .create(<Accordion title="See more" className="foo">Lorem ipsum dolor sit amet</Accordion>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
