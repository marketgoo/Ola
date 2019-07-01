import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ModalTitle = ({ title, htmlTitle=false }) => {
  return htmlTitle ?
    <h2 className="ola_modal-title" dangerouslySetInnerHTML={{__html: title}} /> :
    <h2 className="ola_modal-title">{title}</h2>
}

const ModalIntro = ({ intro, htmlIntro=false }) => {
  return htmlIntro ?
    <p className="ola_modal-intro" dangerouslySetInnerHTML={{__html: intro}} /> :
    <p className="ola_modal-intro">{intro}</p>
}

const ModalHeader = ({ title, htmlTitle, intro, htmlIntro, children, ...props }) => {
  return (
    <header className={cx('ola_modal-header', children && 'has-extra')} {...props}>
      <ModalTitle title={title} htmlTitle={htmlTitle} />
      { intro && <ModalIntro intro={intro} htmlIntro={htmlIntro} /> }
      { children && <div className="ola_modal-extra">{ children }</div> }
    </header>
  )
}

ModalHeader.defaultProps = {
  intro: null,
  htmlTitle: false,
  htmlIntro: false,
  children: undefined
}

ModalHeader.propTypes = {
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

export { ModalHeader }
