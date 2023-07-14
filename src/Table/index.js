import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import TableHead from './components/TableHead'
import TableBody from './components/TableBody'
import TableRow from './components/TableRow'


const Table = ({ caption, sticky, className, children }) => {
  const arrChildren = React.Children.toArray(children)
  
  const thead = arrChildren.find(child => child.props.__type__ === 'TableHead')
  const tbody = arrChildren.find(child => child.props.__type__ === 'TableBody')

  return (
    <div className={
      cx(
        'ola_table-container',
        { 'ola_table-sticky': sticky },
        className)
    }>
      <div className='ola_table' role='table'>
        {thead}
        {tbody}
        {caption && <div className='ola_table-caption'>{caption}</div>}
      </div>
    </div>
  )
}

Table.Row = TableRow
Table.Head = TableHead
Table.Body = TableBody

Table.defaultProps = {
  caption: null,
  className: '',
  sticky: false,
}

Table.propTypes = {
  /** Table header is sticky */
  sticky: PT.bool,
  /** Table caption */
  caption: PT.string,
  /** Extra className */
  className: PT.string,
  /** Children nodes. Accepts a combination of a single TableHead, 
   * and a single TableBody. All are optional. */
  children: function(props, propName) {
    const counts = {
      TableHead: 0,
      TableBody: 0,
    }
    let unnkownCount = 0
    const accepts = Object.keys(counts)
    
    React.Children.forEach(props[propName], child => {
      if (accepts.includes(child.props.__type__)) {
        counts[child.props.__type__] += 1
      } else {
        unnkownCount += 1
      }
    })

    let errors = []
    Object.keys(counts).forEach(key => {
      if (counts[key] > 1) {
        errors.push(`Table has more than one ${key}`)
      }
    })
    if (unnkownCount > 0) {
      errors.push(`Table has components that are not ${accepts.join(', ')}`)
    }

    if (errors.length) {
      return new Error(errors.join('\n'))
    }
  },
}

export default Table
