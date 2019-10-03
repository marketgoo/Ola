import React from 'react'
import {default as PT} from 'prop-types'

const Page = ({ title, url, icon, link }) => {

  const pageUrl = link ?
    <a href={link} rel="noopener noreferrer" target="_blank" className="ola_page-url">{url}</a> :
    <span className="ola_page-url">{ url }</span>

  return (
    <p className="ola_page">
      { icon &&
        <span className="ola_page-icon">
          { icon }
        </span>
      }
      <strong className="ola_page-title">{ title }</strong>
      { pageUrl }
    </p>
  )
}

Page.defaultProps = {
  icon: null,
  link: null
}

Page.propTypes = {
  icon: PT.element,
  /** Page Title*/
  title: PT.string.isRequired,
  /** Page Url */
  url: PT.string.isRequired,
  /** Url link */
  link: PT.string
}

export { Page }
