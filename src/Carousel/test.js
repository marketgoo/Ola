import React from 'react'
import Carousel from '.'
import renderer from 'react-test-renderer'

it('Default Carousel', () => {
  const tree = renderer
    .create(
      <Carousel><p>item 1</p><p>item 2</p></Carousel>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Extra class Carousel', () => {
  const tree = renderer
    .create(
      <Carousel className="ola-margin-top-2"><p>item 1</p><p>item 2</p></Carousel>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})