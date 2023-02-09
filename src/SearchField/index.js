import React from 'react'
import { default as PT } from 'prop-types'

import Button from '../Button'
import Input from '../Input'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'
import Spinner from '../Spinner'
import { useState } from 'react'

const SearchField = ({ id, textButton, busy, placeholder, description, disabled, ...props }) => {
  const [value, setValue] = useState('')
  return (
    <div className="ola_searchField">
      <div className="ola_searchField-form">
        <div className="ola_searchField-field">
          <label htmlFor={id} className="ola_searchField-label">{placeholder}</label>
          <Input type="search" id={id} value={value} className="ola_searchField-input" disabled={disabled} placeholder={placeholder} onChange={event => setValue(event.target.value)} {...props} />
          {busy ? <Spinner /> : <ButtonIcon tabIndex="-1" variant="secondary" className="ola_searchField-icon" disabled={disabled}><Icon name="search" /></ButtonIcon>}
          {value.length > 0 && <ButtonIcon className="ola_searchField-icon-close" onClick={() => setValue('')}><Icon name="close" size="medium" /></ButtonIcon>}
        </div>
        {textButton && <Button variant="primary" disabled={disabled} busy={busy && textButton} className="ola_searchField-button" tabIndex="-1">{textButton}</Button>}
      </div>
      {description && <p className="ola_searchField-description">{description}</p>}
    </div>
  )
}

SearchField.defaultProps = {
  textButton: null,
  description: null,
  disabled: false,
  busy: false
}

SearchField.propTypes = {
  /** Id for SearchField */
  id: PT.string.isRequired,
  /** Text Button for search */
  textButton: PT.string,
  /** Placeholder ( required because works like label )*/
  placeholder: PT.string.isRequired,
  /** Disabled */
  disabled: PT.bool,
  /** Description */
  description: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
    PT.string
  ]),
  /** Busy */
  busy: PT.bool
}

export default SearchField
