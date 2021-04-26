import React from 'react'
import Device from './'
import renderer from 'react-test-renderer'


it('Default Device', () => {
  const tree = renderer.create(<Device/>).toJSON() 
  expect(tree).toMatchSnapshot()
})

it('Device Busy', () => {
  const tree = renderer
    .create(<Device busy="Test"/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Device with url', () => {
  const tree = renderer
    .create(<Device url={'https://via.placeholder.com/150'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})