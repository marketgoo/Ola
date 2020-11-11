import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const Page = ({ title, url, icon, status, className, link, ...props }) => {
  const styles = cx(
    'ola_page',
    { 'ola-skeleton': status !== 'loaded' },
    { 'is-loading': status === 'loading' },
    className
  )

  const pageUrl = link ?
    <a href={link} rel="noopener noreferrer" target="_blank" className="ola_page-url">{url}</a> :
    <span className="ola_page-url">{ url }</span>

  return (
    <p className={styles} {...props}>
      { status === 'loaded'
        ? <>
          { icon &&
            <span className="ola_page-icon">
              { icon }
            </span>
          }
          <strong className="ola_page-title">{ title }</strong>
          { pageUrl }
        </>
        : <>
          { icon && <span className="ola_page-icon"></span> }
          <strong className="ola_page-title"></strong>
          <span className="ola_page-url"></span>
        </>
      }
    </p>
  )
}

Page.defaultProps = {
  icon: null,
  link: null,
  status: 'loaded',
  className: null
}

Page.propTypes = {
  icon: PT.element,
  /** Page Title*/
  title: PT.string.isRequired,
  /** Page Url */
  url: PT.string.isRequired,
  /** Url link */
  link: PT.string,
  /** Page status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
  /** Extra className */
  className: PT.string,
}

export default Page
