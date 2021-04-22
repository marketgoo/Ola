import React, { useState } from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import TabOption from './Option'

const Tabs = ({ className, children, ...props }) => {
  
  const [selectedTab, setSelectedTab] = useState(0)
  const styles = cx('ola_tabs', className)

  return (
    <>
      <ul className={styles} {...props}>
        { children.map((item, index) =>
          <TabOption 
            key={index} 
            selected={index === selectedTab} 
            onClick={() => setSelectedTab(index)}>
            {item.props.label || ''}
          </TabOption>
        ) }
      </ul>
      {children.map((item, index) => {
        return React.cloneElement(item, {
          className: cx({selected : index === selectedTab}),
          key: index
        })
      } )}
    </>
  )
}

Tabs.defaultProps = {
  className: null
}

Tabs.propTypes = {
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node)
  ]).isRequired
}

export default Tabs
