import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Modal = ({ extraClass, children, ...props }) => {
  return (
    <section className={cx('ola_modal', extraClass)} {...props}>
      {children}
    </section>
  )
}

Modal.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { Modal }
