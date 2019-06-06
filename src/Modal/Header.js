import React from 'react'
import {default as PT} from 'prop-types'

const ModalHeader = ({ title, htmlTitle, intro, htmlIntro, ...props }) => {
  return (
    <div className="ola_modal-header" {...props}>
      { htmlTitle ?  <h2 className="ola_modal-title" dangerouslySetInnerHTML={{__html: title}} /> : <h2 className="ola_modal-title">{title}</h2> }
      { htmlIntro ? <p className="ola_modal-intro" dangerouslySetInnerHTML={{__html: intro}} /> : <p className="ola_modal-intro">{intro}</p> }
    </div>
  )
}

ModalHeader.defaultProps = {
  intro: null,
  htmlTitle: false,
  htmlIntro: false
}

ModalHeader.propTypes = {
  /** Title of header */
  title: PT.string.isRequired,
  /** Title support HTML tags */
  htmlTitle: PT.bool,
  /** Intro support HTML tags */
  htmlIntro: PT.bool,
  /** Intro text of header */
  intro: PT.string
}

export { ModalHeader }
