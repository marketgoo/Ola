import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {
  Input,
  Field,
  FieldDescription,
  SearchField,
  Checkbox,
  Switch
} from '../src'

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
  .add('Checkbox', () => (
    <div className="preview-centered-inner">
      <p><Checkbox label="Checkbox" /></p>
      <p><Checkbox label="Checkbox <span> with span</span>" htmlLabel /></p>
    </div>
  ))
  .add('Switch', () => (
    <div className="preview-centered-inner">
      <p><Switch label="Switch" /></p>
      <p><Switch label="Switch <span> with span</span>" htmlLabel /></p>
    </div>
  ))
