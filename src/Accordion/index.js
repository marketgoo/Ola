import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

import { Icon } from '../Icon'

const Accordion = ({ children, title, extraClass, ...props }) => {
  const styles = cx('ola_accordion', extraClass)
  return (
    <details className={styles} {...props}>
        <summary className="ola_accordion-header">
            <span className="ola_accordion-marker"><Icon name="chevronRight" /></span>
            <span className="ola_accordion-title">{ title }</span>
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
  title: PT.string,
  extraClass: PT.string
}

export { Accordion }
