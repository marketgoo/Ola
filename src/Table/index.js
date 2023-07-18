import React, { useEffect, useRef } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import TableRow from './components/TableRow'
import TableCell from './components/TableCell'
import { debounce } from '../utils'


const Table = ({ stickyHeader, minWidth, maxHeight, className, gridTemplateColumns, children }) => {
  const [stickyStyles, setStickyStyles] = React.useState({})
  const tableRef = useRef()
  let numColumns = 0

  const cloneChildren = React.Children.map(children, (child, index) => {
    if (index === 0) {
      numColumns = React.Children.count(child.props.children)
      return React.cloneElement(child, { sticky: stickyHeader, stickyStyles, header: true })
    }

    return React.cloneElement(child, { sticky: false })
  })

  const handleScrollResize = debounce((e) => {
    const eventType = e?.nativeEvent ? e?.nativeEvent.type : e?.type

    const tableStyles = window.getComputedStyle(tableRef.current)
    const nStickyStyles = {
      ...stickyStyles,
      top: e ? `${e.target.scrollTop}px` : '0'
    }

    if (!eventType || eventType === 'resize') {
      const firstElements = Array.from(tableRef.current.querySelectorAll('.ola_table-cell:not(.is-header)')).slice(0, numColumns)
      nStickyStyles.width = tableStyles.width
      nStickyStyles.gridTemplateColumns = firstElements.map(elem => `${elem.offsetWidth}px`).join(' ')
    }

    setStickyStyles(nStickyStyles)
  })

  useEffect(() => {
    if (stickyHeader) {
      handleScrollResize()

      window.addEventListener('resize', handleScrollResize)
    }

    return () => {
      window.removeEventListener('resize', handleScrollResize)
    }
  }, [])

  return (
    <div className={
      cx(
        'ola_table-container',
        { 'is-sticky': stickyHeader },
        className)
    } onScroll={stickyHeader ? handleScrollResize : null}>
      <div ref={tableRef} className='ola_table' role='table' style={{
        '--min-width': minWidth,
        '--max-height': maxHeight,
        '--grid-template-columns': gridTemplateColumns || `repeat(${numColumns}, 1fr)`
      }}>
        {cloneChildren}
      </div>
    </div>
  )
}

Table.Cell = TableCell
Table.Row = TableRow

Table.defaultProps = {
  className: '',
  stickyHeader: false,
  minWidth: '100%',
  maxHeight: 'unset',
  gridTemplateColumns: null
}

Table.propTypes = {
  /**
   * To overwrite the grid-template-columns. The default value is `repeat(NUM_COLUMNS, 1fr)`
   * Accept any valid CSS [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) value. */
  gridTemplateColumns: PT.string,
  /** Minimum width of the table in css valid value */
  minWidth: PT.string,
  /** Maximun height of the table in css valid value */
  maxHeight: PT.string,
  /** Table header is sticky */
  stickyHeader: PT.bool,
  /** Extra className */
  className: PT.string,
  /** Children nodes. */
  children: PT.oneOfType([
    TableRow,
    PT.arrayOf(TableRow),
  ]).isRequired,
}

export default Table