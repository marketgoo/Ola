import React from 'react'
import {default as PT} from 'prop-types'

const ModalFooter = ({ children, ...props }) => {
  return (
    <div className="ola_modal-footer" {...props}>
      <div className="ola_modal-buttons">
        { children }
      </div>
    </div>
  )
}

ModalFooter.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { ModalFooter }
