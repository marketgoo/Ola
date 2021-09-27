import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const SectionHeader = ({ title, img, action, variant, className, children, ...props }) => {
  const styles = cx(
    'ola_section-header',
    { [`is-${variant}`]: variant },
    className
  )

  return (
    <header className={styles} {...props}>
      { img && <div className="ola_section-img">{ img }</div> }
      {action ? 
        <div className="ola_section_action">
          <h1 className="ola_section-title">{title}</h1>
          {action}
        </div> :
        <h1 className="ola_section-title">{title}</h1>
      }
      { children && <div className="ola_section-intro">{ children }</div> }
    </header>
  )
}

SectionHeader.defaultProps = {
  className: null,
  variant: null,
  title: null,
  img: null,
  children: null,
  action: null
}

SectionHeader.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Variants variants */
  variant: PT.oneOf(['center']),
  /** Optional image */
  img: PT.node,
  /** Title of header */
  title: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Extra element positioned at right */
  action: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ])
}

export default SectionHeader
