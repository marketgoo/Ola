import React from 'react'
import {default as PT} from 'prop-types'

import { Button } from '../Button'
import { Input } from '../Input'

const SearchField = ({ id, textButton, busy, placeholder, ...props }) => {
  return (
    <form className="searchField">
      <label htmlFor={id} className="searchField-label">{ placeholder }</label>
      <Input type="search" id={id} extraClass="searchField-input" placeholder={placeholder} {...props} />
      { textButton && <Button variant="primary" busy={busy} extraClass="searchField-button" tabIndex="-1">{ textButton }</Button> }
    </form>
  )
}

SearchField.defaultProps = {
  textButton: null,
  busy: false
}

SearchField.propTypes = {
  /** Id for SearchField */
  id: PT.string.isRequired,
  /** Text Button for search */
  textButton: PT.string,
  /** Placeholder ( required because works like label )*/
  placeholder: PT.string.isRequired,
  /** Busy */
  busy: PT.bool
}

export { SearchField }
