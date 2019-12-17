import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ModalContent = ({ extraClass, children, ...props }) => {
  return (
    <div className={cx('ola_modal-content', extraClass)} {...props}>
      {children}
    </div>
  )
}

ModalContent.propTypes = {
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
}

export default ModalContent
