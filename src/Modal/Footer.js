import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ModalFooter = ({ extraClass, children, ...props }) => {
  return (
    <div className={cx('ola_modal-footer', extraClass)} {...props}>
      { children }
    </div>
  )
}

ModalFooter.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export { ModalFooter }
