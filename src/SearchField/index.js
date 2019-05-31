import React from 'react'
import {default as PT} from 'prop-types'

import { Button } from '../Button'
import { Input } from '../Input'

const SearchField = ({ textButton }) => {
  return (
    <form className="searchField">
      <label htmlFor="search" className="searchField-label">Your email</label>
      <Input type="search" id="search" extraClass="searchField-input" placeholder="Filter elements" />
      { textButton && <Button variant="primary" extraClass="searchField-button" tabIndex="-1">{ textButton }</Button> }
    </form>
  )
}

SearchField.defaultProps = {
  textButton: null
}

SearchField.propTypes = {
  textButton: PT.string
}

export { SearchField }
