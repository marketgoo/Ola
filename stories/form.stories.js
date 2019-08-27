import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
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
  }
]

const random_option_values_with_description = [
  {
    label: 'Test 1',
    value: 'test1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    label: 'Test 2',
    value: 'test2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    label: 'Test 3',
    value: 'test3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

storiesOf('Form', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
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
    <div className="preview-centered-inner">
      <Field
        id="field-cutsom-description"
        label="Test"
        customDescription={<FieldDescription>Test custom content with <a href="#" onClick={action('onClick event')}>link</a></FieldDescription>}
        hint="(optional)">
        <Input placeholder="Text placeholder" />
      </Field>
      <Field
        id="field-custom-description-error"
        error
        label="Test"
        customDescription={<FieldDescription>Test custom content with <a href="#" onClick={action('onClick event')}>link</a></FieldDescription>}
        hint="(optional)">
        <Input placeholder="Text placeholder" />
      </Field>
    </div>
  ))
  .add('SearchField', () => (
    <div className="preview-centered-inner">
      <SearchField id="search" busy placeholder="Filter elements" />
      <SearchField id="search-button" placeholder="Filter elements" textButton="Test Search" />
      <SearchField id="search-loading" busy placeholder="Filter elements" textButton="Test Search" />
    </div>
  ))
  .add('Check', () => (
    <div className="preview-centered-inner">
      <p><Check>Check</Check></p>
      <p><Check>Check <span> with span</span></Check></p>
      <p><Check type="radio" name="name">Check Radio</Check></p>
      <p><Check type="radio" name="name">Check Radio <span> with span</span></Check></p>
    </div>
  ))
  .add('CheckGroup', () => (
    <div className="preview-centered-inner">
      <Field
        id="field-cutsom-checkGroup"
        label="Select the most accurate option:"
        hint="(optional)">
        <CheckGroup values={random_option_values} />
      </Field>
      <Field
        id="field-cutsom-checkGroup"
        label="Select the most accurate option:"
        hint="(optional)">
        <CheckGroup values={random_option_values} type="checkbox" />
      </Field>
    </div>
  ))
  .add('CheckArea', () => (
    <div className="preview-centered-inner">
      <Field
        id="field-cutsom-checkArea"
        label="Select the most accurate option:"
        hint="(optional)">
        <CheckArea values={random_option_values} type="checkbox" />
      </Field>
      <Field
        id="field-cutsom-checkArea"
        label="Select the most accurate option:"
        hint="(optional)">
        <CheckArea values={random_option_values} variant="column"/>
      </Field>
      <Field
        id="field-cutsom-checkArea"
        label="Select the most accurate option:"
        hint="(optional)">
        <CheckArea values={random_option_values_with_description} />
      </Field>
      <Field
        id="field-cutsom-checkArea"
        label="Select the most accurate option:"
        hint="(optional)">
        <CheckArea values={random_option_values_with_description} type="checkbox" />
      </Field>
    </div>
  ))
  .add('Switch', () => (
    <div className="preview-centered-inner">
      <p><Switch label="Switch" /></p>
      <p><Switch label="Switch <span> with span</span>" htmlLabel /></p>
    </div>
  ))
  .add('Select', () => (
    <div className="preview-centered-inner">
      <p>
        <Select options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]} />
      </p>
    </div>
  ))
  .add('Select Field', () => (
    <div className="preview-centered-inner">
      <p>
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
      </p>
      <p>
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
      </p>
    </div>
  ))
