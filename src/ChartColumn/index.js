import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ChartColumn = ({ children, className, rule }) => {
  const styles = cx('ola_chartColumn', className)

  return (
    <div className={styles}>
      { children }
      { rule && <span className="ola_chartColumn-rule" style={{ '--value': rule.value }}>{ rule.name} </span> }
    </div>
  )
}

ChartColumn.defaultProps = {
  className: null,
  rule: null,
}

ChartColumn.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Extra className */
  className: PT.string,
  /** Horizontal rule */
  rule: PT.exact({
    name: PT.string,
    value: PT.number,
  })
}

export default ChartColumn
