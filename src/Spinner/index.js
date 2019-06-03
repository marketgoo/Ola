import React from 'react'
import {default as PT} from 'prop-types'

const Spinner = ({...props }) => {
  return (
    <svg {...props} className="ola_spinner" width="44" height="44" viewBox="0 0 44 44">
      <circle r="10" cx="22" cy="22"></circle>
    </svg>
  )
}

Spinner.defaultProps = {
  size: 'medium',
}

Spinner.propTypes = {
  /** Spinner sizes */
  size: PT.oneOf(['medium', 'small']),
}

export { Spinner }
