import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ModalHeader = ({ title, intro, children, className, ...props }) => {
  return (
    <header className={cx('ola_modal-header', children && 'has-extra', className)} {...props}>
      <h2 className="ola_modal-title">{title}</h2>
      { intro && <p className="ola_modal-intro">{intro}</p> }
      { children && <div className="ola_modal-extra">{ children }</div> }
    </header>
  )
}

ModalHeader.defaultProps = {
  intro: null,
  children: null
}

ModalHeader.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Title of header */
  title: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Intro text of header */
  intro: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default ModalHeader
