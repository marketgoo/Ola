import React from 'react'
import {default as PT} from 'prop-types'

const ModalContent = ({ children, ...props }) => {
  return (
    <div className="ola_modal-content" {...props}>
      {children}
    </div>
  )
}

ModalContent.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { ModalContent }
