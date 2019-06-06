import React from 'react'
import {default as PT} from 'prop-types'

const Modal = ({ children, ...props }) => {
  return (
    <section className="ola_modal" {...props}>
      {children}
    </section>
  )
}

Modal.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Modal }
