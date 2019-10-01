import React from 'react'
import {default as PT} from 'prop-types'
import { Icon } from '../Icon'

const Page = ({ title, url, iconName }) => {
  return (
    <p className="ola_page">
      { iconName &&
        <span className="ola_page-icon">
          <Icon name={iconName} />
        </span>
      }
      <strong className="ola_page-title">{ title }</strong>
      <span className="ola_page-url">{ url }</span>
    </p>
  )
}

Page.defaultProps = {
  iconName: 'page'
}

Page.propTypes = {
  /** Page Title*/
  title: PT.string.isRequired,
  /** Page Url */
  url: PT.string,
  /** Icon name */
  iconName: PT.string
}

export { Page }
