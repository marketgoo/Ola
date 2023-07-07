import React, { useState } from 'react'
import Field from './'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

import { useForm, Controller } from 'react-hook-form'

export default {
  title: 'Field',
  component: Field,
  args: {
    id: 'field-test',
    label: 'Label of the field',
    description: 'This is a description',
    hint: '(optional)',
    counter: false
  },
  argTypes: {
    children: { control: { disable: true } },
  }
}

export const FieldInput = (args) =>
  <Field {...args}>
    <Input placeholder="Text placeholder" />
  </Field>

export const FieldInputCounter = (args) =>
  <Field {...args}>
    <Input placeholder="With max-length 10" maxLength={10} />
  </Field>
FieldInputCounter.args = {
  counter: true
}

export const FieldTextarea = (args) =>
  <Field {...args}>
    <Input type="textarea" placeholder="Textarea placeholder" />
  </Field>

export const FieldSelect = (args) =>
  <Field {...args}>
    <Select options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ]} />
  </Field>

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
