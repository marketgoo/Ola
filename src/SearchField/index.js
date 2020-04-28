import React from 'react'
import {default as PT} from 'prop-types'

import Button from '../Button'
import Input from '../Input'
import Icon from '../Icon'
import ButtonIcon from '../ButtonIcon'
import Spinner from '../Spinner'

const SearchField = ({ id, textButton, busy, placeholder, description, ...props }) => {
  return (
    <div className="ola_searchField">
      <div className="ola_searchField-form">
        <div className="ola_searchField-field">
          <label htmlFor={id} className="ola_searchField-label">{ placeholder }</label>
          <Input type="search" id={id} className="ola_searchField-input" placeholder={placeholder} {...props} />
          <ButtonIcon tabIndex="-1" variant="secondary" className="ola_searchField-icon"><Icon name="search" /></ButtonIcon>
          {busy && <Spinner />}
        </div>
        { textButton && <Button variant="primary" busy={busy && textButton} className="ola_searchField-button" tabIndex="-1">{ textButton }</Button> }
      </div>
      { description && <p className="ola_searchField-description">{description}</p> }
    </div>
  )
}

SearchField.defaultProps = {
  textButton: null,
  description: null,
  busy: false
}

SearchField.propTypes = {
  /** Id for SearchField */
  id: PT.string.isRequired,
  /** Text Button for search */
  textButton: PT.string,
  /** Placeholder ( required because works like label )*/
  placeholder: PT.string.isRequired,
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
