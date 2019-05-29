import React from 'react'
import {default as PT} from 'prop-types'
import { Input } from '../Input'

const Field = ({...props }) => {
  return (
    <Input {...props } />
  )
}

Field.defaultProps = {
}

Field.propTypes = {
}

export { Field }
