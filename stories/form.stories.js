import React from 'react'

import create from './create'
import { action } from '@storybook/addon-actions'

import {
  Input,
  Field,
  FieldDescription,
  SearchField,
  Check,
  CheckGroup,
  CheckArea,
  Switch,
  Select
} from '../dist'

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
    label: '<strong>Test 1</strong>Lorem ipsum dolor sit amet.',
    value: 'test1'
  },
  {
    label: '<strong>Test 2</strong>Lorem ipsum dolor sit amet.',
    value: 'test2'
  },
  {
    label: '<strong>Test 3</strong>Lorem ipsum dolor sit amet.',
    value: 'test3'
  }
]

create('Form')
  .add('Input Empty', () => (
    <Input placeholder="Text placeholder" />
  ))
  .add('Input Empty Error', () => (
    <Input error={true} placeholder="Text placeholder" />
  ))
  .add('Input Empty disabled', () => (
    <Input placeholder="Text placeholder" disabled />
  ))
  .add('Input Filled', () => (
    <Input defaultValue="louis@gmail.com" />
  ))
  .add('Input textarea', () => (
    <Input type="textarea" />
  ))
  .add('Field', () => (
    <Field
      id="field-test"
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Field Error', () => (
    <Field
      id="field-error"
      error
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Field Disabled', () => (
    <Field
      id="field-disabled"
      disabled
      label="Test"
      description="Test description"
      hint="(optional)">
      <Input placeholder="Text placeholder" />
    </Field>
  ))
  .add('Field Custom description', () => (
    <div>
      <figure>
        <Field
          id="field-cutsom-description"
          label="Test"
          customDescription={<FieldDescription>Test custom content with <a href="#" onClick={action('onClick event')}>link</a></FieldDescription>}
          hint="(optional)">
          <Input placeholder="Text placeholder" />
        </Field>
      </figure>
      <figure>
        <Field
          id="field-custom-description-error"
          error
          label="Test"
          customDescription={<FieldDescription>Test custom content with <a href="#" onClick={action('onClick event')}>link</a></FieldDescription>}
          hint="(optional)">
          <Input placeholder="Text placeholder" />
        </Field>
      </figure>
    </div>
  ))
  .add('SearchField', () => (
    <div>
      <figure><SearchField id="search" busy placeholder="Filter elements" /></figure>
      <figure><SearchField id="search-button" placeholder="Filter elements" textButton="Test Search" /></figure>
      <figure><SearchField id="search-loading" busy placeholder="Filter elements" textButton="Test Search" /></figure>
    </div>
  ))
  .add('Check', () => (
    <div>
      <figure><Check>Check</Check></figure>
      <figure><Check>Check <span> with span</span></Check></figure>
      <figure><Check type="radio" name="name">Check Radio</Check></figure>
      <figure><Check type="radio" name="name">Check Radio <span> with span</span></Check></figure>
    </div>
  ))
  .add('CheckGroup', () => (
    <div>
      <figure>
        <Field
          id="field-cutsom-checkGroup"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckGroup options={random_option_values} />
        </Field>
      </figure>
      <figure>
        <Field
          id="field-cutsom-checkGroup"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckGroup options={random_option_values} type="checkbox" />
        </Field>
      </figure>
    </div>
  ))
  .add('CheckArea', () => (
    <div>
      <figure>
        <Field
          id="field-cutsom-checkArea"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckArea options={random_option_values} />
        </Field>
      </figure>
      <figure>
        <Field
          id="field-cutsom-checkArea"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckArea options={random_option_values} type="checkbox" />
        </Field>
      </figure>
    </div>
  ))
  .add('CheckArea with html description', () => (
    <div>
      <figure>
        <Field
          id="field-cutsom-checkArea"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckArea htmlOptions={true} options={random_option_values_with_description} />
        </Field>
      </figure>
      <figure>
        <Field
          id="field-cutsom-checkArea"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckArea htmlOptions={true} options={random_option_values_with_description} type="checkbox" />
        </Field>
      </figure>
    </div>
  ))
  .add('CheckArea column', () => (
    <div>
      <figure>
        <Field
          id="field-cutsom-checkArea"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckArea options={random_option_values} variant="column" type="checkbox" />
        </Field>
      </figure>
      <figure>
        <Field
          id="field-cutsom-checkArea"
          label="Select the most accurate option:"
          hint="(optional)">
          <CheckArea htmlOptions options={random_option_values_with_description} variant="column" />
        </Field>
      </figure>
    </div>
  ))
  .add('Switch', () => (
    <div>
      <figure><Switch label="Switch" /></figure>
      <figure><Switch label="Switch <span> with span</span>" htmlLabel /></figure>
    </div>
  ))
  .add('Select', () => (
    <div>
      <figure>
        <Select options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
          { value: '', label: 'None' }
        ]} />
      </figure>
      <figure>
        <Select emptyOption="Select yout flavor" options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
          { value: '', label: 'None' }
        ]} />
      </figure>
      <figure>
        <Select emptyOption="Select yout flavor" value="vanilla" options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
          { value: '', label: 'None' }
        ]} />
      </figure>
    </div>
  ))
  .add('Select Field', () => (
    <div>
      <figure>
        <Field
          id="field-select-description"
          label="Test"
          customDescription={<FieldDescription>Test custom content with <a href="#" onClick={action('onClick event')}>link</a></FieldDescription>}
          hint="(optional)">
          <Select options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]} />
        </Field>
      </figure>
      <figure>
        <Field
          id="field-select-error"
          error
          label="Test"
          customDescription={<FieldDescription>Test custom content with <a href="#" onClick={action('onClick event')}>link</a></FieldDescription>}
          hint="(optional)">
          <Select options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]} />
        </Field>
      </figure>
    </div>
  ))
