import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'

const Accordion = ({ children, title, extraClass, ...props }) => {
  const styles = cx('ola_accordion', extraClass)
  return (
    <details className={styles} {...props}>
      <summary className="ola_accordion-header">
        <div className="ola_accordion-header-content">
          <span className="ola_accordion-marker"><Icon name="chevronRight" /></span>
          <span className="ola_accordion-title">{ title }</span>
        </div>
      </summary>
      <div className="ola_accordion-content">
        { children }
      </div>
    </details>
  )
}

Accordion.defaultProps = {
  extraClass: null
}

Accordion.propTypes = {
  /** Title */
  title: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Extra className */
  extraClass: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
}

export default Accordion
