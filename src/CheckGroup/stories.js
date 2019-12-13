import React from 'react'

import create from '../create'

import Field from '../Field'
import CheckGroup from './'

const random_option_values = [
  {
    label: 'Test 1',
    value: 'test1'
  },
  {
    label: 'Test 2',
    value: 'test2'
  },
  {
    label: 'Test 3',
    value: 'test3'
  },
  {
    label: 'Test 4',
    value: 'test4'
  },
  {
    label: 'Test 5',
    value: 'test5'
  },
  {
    label: 'Test 6',
    value: 'test6'
  },
  {
    label: 'Test 7',
    value: 'test7'
  },
  {
    label: 'Test 8',
    value: 'test8'
  },
  {
    label: 'Test 9',
    value: 'test9'
  },
  {
    label: 'Test 10',
    value: 'test10'
  },
  {
    label: 'Test 11',
    value: 'test11'
  }
]

create('CheckGroup')
  .add('Default', () => (
    <figure>
      <Field
        id="field-cutsom-checkGroup"
        label="Select the most accurate option:"
        hint="(optional)">
        <CheckGroup name="random" options={random_option_values} />
      </Field>
    </figure>
  ))
