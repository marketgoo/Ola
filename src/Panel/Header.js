import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const PanelHeader = ({ title, htmlTitle, intro, htmlIntro, children }) => {
  return (
    <header className={cx('panel-header', children && 'has-extra')}>
      { htmlTitle ?  <h1 className="panel-title" dangerouslySetInnerHTML={{__html: title}} /> : <h1 className="panel-title">{title}</h1> }
      { htmlIntro ? <p className="panel-intro" dangerouslySetInnerHTML={{__html: intro}} /> : <p className="panel-intro">{intro}</p> }
      { children && <div className="panel-extra">{ children }</div> }
    </header>
  )
}

PanelHeader.defaultProps = {
  intro: null,
  htmlTitle: false,
  htmlIntro: false,
  children: undefined
}

PanelHeader.propTypes = {
  /** Title of header */
  title: PT.string.isRequired,
  /** Title support HTML tags */
  htmlTitle: PT.bool,
  /** Intro support HTML tags */
  htmlIntro: PT.bool,
  /** Intro text of header */
  intro: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export { PanelHeader }
