import React from 'react'
import { storiesOf } from '@storybook/react'

import CheckGroup from './'
import Check from '../Check'
import Field from '../Field'

const options = [
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

storiesOf('CheckGroup')
  .add('Row (Check area)', () => (
    <figure>
      <CheckGroup>
        <Check variant="area">
          <strong className="ola-callout">Test 1</strong>
          <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
        </Check>
        <Check variant="area">
          <strong className="ola-callout">Test 1</strong>
          <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
        </Check>
        <Check variant="area">
          <strong className="ola-callout">Test 1</strong>
          <p className="ola-callout ola-nomargin">Lorem ipsum dolor sit amet</p>
        </Check>
      </CheckGroup>
    </figure>
  ))
  .add('Columns (Check area)', () => (
    <figure>
      <CheckGroup variant="column">
        <Check variant="area">
          <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg" />
          <strong className="ola-body">Test 1</strong>
          <p className="ola-caption">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </Check>
        <Check variant="area">
          <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg" />
          <strong className="ola-body">Test 2 with a large title</strong>
          <p className="ola-caption">Lorem ipsum dolor sit amet</p>
        </Check>
        <Check variant="area">
          <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg" />
          <strong className="ola-body">Test 3</strong>
          <p className="ola-caption">Lorem ipsum dolor sit amet</p>
        </Check>
      </CheckGroup>
    </figure>
  ))
  .add('List (Check option)', () => (
    <figure>
      <CheckGroup variant="list">
        {options.map((option, key) => (
          <Check key={key} value={option.value} variant="option">
            {option.label}
          </Check>
        ))}
      </CheckGroup>
    </figure>
  ))
  .add('With Field Warning', () => (
    <figure>
      <Field
        id="field-error"
        error
        label="Test"
        description="Test description"
        hint="(optional)">
        <CheckGroup variant="list">
          {options.map((option, key) => (
            <Check key={key} value={option.value} variant="option">
              {option.label}
            </Check>
          ))}
        </CheckGroup>
      </Field>
    </figure>
  ))
