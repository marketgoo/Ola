import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const InputContainer = ({ extraClass, error, type, prefix, suffix, ...props }) => {
  return <label className={ cx('ola_input ola_inputContainer', {'is-invalid': error}, extraClass) }>
        { prefix && <div className="ola_inputContainer-prefix">{ prefix }</div> }
        { type === 'textarea' ?
        ( <textarea type={type} {...props} /> ) :
        ( <input type={type} {...props} /> ) }
        { suffix && <div className="ola_inputContainer-suffix">{ suffix }</div> }
    </label>
}

InputContainer.defaultProps = {
  type: 'text',
  extraClass: null,
  error: false,
  prefix: null,
  suffix: null
}

InputContainer.propTypes = {
  /** Input valid types (textarea returns textarea html tag) */
  type: PT.oneOf([
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'textarea',
    'time',
    'url',
    'week'
  ]),
  /** Extra className */
  extraClass: PT.string,
  /** Input is invalid */
  error: PT.bool,
  /** Prefix */
  prefix: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Suffix */
  suffix: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default InputContainer
