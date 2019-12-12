import React from 'react'

import create from '../create'

import CheckArea from './'

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

const random_option_values_with_description = [
  {
    label: `
    <strong class="ola-callout">Test 1</strong>
    <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg">
    <p class="ola-callout">Lorem ipsum dolor sit amet</p>
    `,
    value: 'test1'
  },
  {
    label: `
    <strong class="ola-callout">Test 2</strong>
    <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg">
    <p class="ola-callout">Lorem ipsum dolor sit amet</p>
    `,
    value: 'test2'
  },
  {
    label: `
    <strong class="ola-callout">Test 3</strong>
    <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg">
    <p class="ola-callout">Lorem ipsum dolor sit amet</p>
    `,
    value: 'test3'
  }
]

create('CheckArea')
  .add('Rows', () => (
    <figure>
      <CheckArea name="random" options={random_option_values} />
    </figure>
  ))
  .add('Columns', () => (
    <figure>
      <CheckArea name="random" htmlOptions options={random_option_values_with_description} variant="column" />
    </figure>
  ))

