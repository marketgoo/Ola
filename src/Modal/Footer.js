import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ModalFooter = ({ className, children, ...props }) => {
  return (
    <div className={cx('ola_modal-footer', className)} {...props}>
      { children }
    </div>
  )
}

ModalFooter.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default ModalFooter
