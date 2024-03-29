/* eslint-disable react/prop-types */
import React from 'react'
import { default as PT } from 'prop-types'

import Button from '../Button'
import Input from '../Input'
import ButtonIcon from '../ButtonIcon'
import Spinner from '../Spinner'

const SearchField = ({
  id,
  textButton,
  busy,
  placeholder,
  description,
  disabled,
  onRemove,
  ...props
}) => {
  return (
    <div className="ola_searchField">
      <div className="ola_searchField-form">
        <div className="ola_searchField-field">
          <label htmlFor={id} className="ola_searchField-label">
            {placeholder}
          </label>
          <Input
            type="search"
            id={id}
            className="ola_searchField-input"
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
          {busy ? (
            <Spinner />
          ) : (
            <ButtonIcon
              tabIndex="-1"
              color="neutral"
              className="ola_searchField-icon"
              disabled={disabled}
              icon="search"
            />
          )}
          {props?.value?.length > 0 && onRemove && (
            <ButtonIcon
              className="ola_searchField-icon-close"
              onClick={onRemove}
              icon="close"
            />
          )}
        </div>
        {textButton && (
          <Button
            variant="primary"
            disabled={disabled}
            busy={busy && textButton}
            className="ola_searchField-button"
            tabIndex="-1"
          >
            {textButton}
          </Button>
        )}
      </div>
      {description && (
        <p className="ola_searchField-description">{description}</p>
      )}
    </div>
  )
}

SearchField.defaultProps = {
  textButton: null,
  description: null,
  disabled: false,
  busy: false,
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
  description: PT.oneOfType([PT.arrayOf(PT.node), PT.node, PT.string]),
  /** Busy */
  busy: PT.bool,
  /** Function to clear Input */
  onRemove: PT.func,
}

export default SearchField
