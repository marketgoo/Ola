import React, { useState } from 'react'
import Field from './'
import Input from '../Input'
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
  },
}

export const Base = (args) => (
  <Field {...args}>
    <Input placeholder="Text placeholder" />
  </Field>
)

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
              label={'Test input'}
              error={!!errors?.testInput?.message}
              description={
                errors?.testInput?.message ? errors.testInput.message : ''
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

Base.argTypes = {
  children: { control: { disable: true } },
}
