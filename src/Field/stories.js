import React, { useState } from 'react'
import Field from './'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import ButtonIcon from '../ButtonIcon'

import { useForm, Controller } from 'react-hook-form'

export default {
  title: 'Field',
  component: Field,
  args: {
    id: 'field-test',
    label: 'Label of the field',
    description: 'This is a description',
    hint: '(optional)',
    counter: false,
    error: false
  },
  argTypes: {
    children: { control: { disable: true } },
  }
}

export const FieldInput = (args) =>
  <Field {...args}>
    <Input placeholder="Text placeholder" />
  </Field>

export const FieldInputError = (args) =>
  <Field {...args}>
    <Input placeholder="Text placeholder" />
  </Field>
FieldInputError.args = {
  error: true
}

export const FieldInputNoHint = (args) =>
  <Field {...args}>
    <Input placeholder="Without hint" />
  </Field>
FieldInputNoHint.args = {
  hint: null
}

export const FieldInputNoDescription = (args) =>
  <Field {...args}>
    <Input placeholder="Without description" />
  </Field>
FieldInputNoDescription.args = {
  description: null
}

export const FieldInputNoHintDescription = (args) =>
  <Field {...args}>
    <Input placeholder="Without hint nor description" />
  </Field>
FieldInputNoHintDescription.args = {
  hint: null,
  description: null
}

export const FieldInputCounter = (args) =>
  <Field {...args}>
    <Input placeholder="With max-length 10" maxLength={10} />
  </Field>
FieldInputCounter.args = {
  counter: true
}

export const FieldInputIcon = (args) =>
  <Field {...args}>
    <Input placeholder="With Icon" icon={<ButtonIcon icon="copy" />} />
  </Field>

export const FieldTextarea = (args) =>
  <Field {...args}>
    <Input type="textarea" placeholder="Textarea placeholder" />
  </Field>

export const FieldTextareaError = (args) =>
  <Field {...args}>
    <Input type="textarea" placeholder="Textarea placeholder" />
  </Field>
FieldTextareaError.args = {
  error: true
}

export const FieldSelect = (args) =>
  <Field {...args}>
    <Select options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ]} />
  </Field>

export const FieldSelectError = (args) =>
  <Field {...args}>
    <Select options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ]} />
  </Field>
FieldSelectError.args = {
  error: true
}

export const reactHookFormsExample = () => {
  const onSubmit = (data) => setData(data)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const [data, setData] = useState(null)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={'testInput'}
          control={control}
          defaultValue={'Default value'}
          rules={{ required: 'illo k ase loko?' }}
          render={({ field }) => (
            <Field
              id="field-test"
              label="Test input"
              hint="Test hint"
              error={!!errors?.testInput?.message}
              description={
                errors?.testInput?.message ? errors.testInput.message : 'This is a normal description'
              }
            >
              <Input {...field} />
            </Field>
          )}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      {data && <code>{JSON.stringify(data)}</code>}
    </>
  )
}
