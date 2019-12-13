import React from 'react'
import Field from './'
import FieldDescription from './Description'
import Input from '../Input'
import renderer from 'react-test-renderer'

it('Default Field', () => {
  const tree = renderer
    .create(<Field id="test" label="Test label"><Input /></Field>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Field with description', () => {
  const tree = renderer
    .create(<Field id="test" label="Test label" description="Test Description"><Input /></Field>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Field with custom description', () => {
  const tree = renderer
    .create(<Field id="test" label="Test label" customDescription={<span>Custom description</span>}><Input /></Field>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Field with hint', () => {
  const tree = renderer
    .create(<Field id="test" label="Test label" hint="Test hint"><Input /></Field>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Field with error', () => {
  const tree = renderer
    .create(<Field id="test" label="Test label" error={true}><Input /></Field>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Field with custom description with error', () => {
  const tree = renderer
    .create(<Field id="test" label="Test label" error={true} customDescription={<span>Custom description</span>}><Input /></Field>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Default FieldDescription', () => {
  const tree = renderer
    .create(<FieldDescription>Description</FieldDescription>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('FieldDescription with error', () => {
  const tree = renderer
    .create(<FieldDescription error={true}>Description</FieldDescription>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
