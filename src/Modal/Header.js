import React from 'react'
import {default as PT} from 'prop-types'

const ModalHeader = ({ title, htmlTitle, intro, htmlIntro, children, ...props }) => {
  return (
    <div className="ola_modal-header" {...props}>
      { htmlTitle ?  <h2 className="ola_modal-title" dangerouslySetInnerHTML={{__html: title}} /> : <h2 className="ola_modal-title">{title}</h2> }
      { htmlIntro ? <p className="ola_modal-intro" dangerouslySetInnerHTML={{__html: intro}} /> : <p className="ola_modal-intro">{intro}</p> }
      { children }
    </div>
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
  ]).isRequired
}

export { ModalHeader }
