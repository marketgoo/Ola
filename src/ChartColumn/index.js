import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

const ChartColumn = ({ children, className }) => {
  const styles = cx('ola_chartColumn', className)

  return (
    <div className={styles}>
      { children }
    </div>
  )
}

ChartColumn.defaultProps = {
  className: null
}

ChartColumn.propTypes = {
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired,
  /** Extra className */
  className: PT.string
}

export default ChartColumn
