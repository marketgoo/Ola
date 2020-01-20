import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const PanelHeader = ({ title, intro, extraClass, children, ...props }) => {
  return (
    <header className={cx('ola_panel-header', children && 'has-extra', extraClass)} {...props}>
      <h1 className="ola_panel-title">{title}</h1>
      { intro && <p className="ola_panel-intro">{intro}</p> }
      { children && <div className="ola_panel-extra">{ children }</div> }
    </header>
  )
}

PanelHeader.defaultProps = {
  intro: null,
  children: null
}

PanelHeader.propTypes = {
  /** Extra className */
  extraClass: PT.string,
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

export default PanelHeader
