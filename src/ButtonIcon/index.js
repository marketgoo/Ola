import React from 'react'
import {default as PT} from 'prop-types'

const ButtonIcon = ({ children, ...props }) => {
  return (<button {...props} className='buttonIcon'>{children}</button>)
}

ButtonIcon.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { ButtonIcon }
