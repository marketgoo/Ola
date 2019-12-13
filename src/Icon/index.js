import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'

// Icons
import ChevronDown from './ChevronDown'
import ChevronUp from './ChevronUp'
import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'
import Clock from './Clock'
import Close from './Close'
import Error from './Error'
import Help from './Help'
import Home from './Home'
import Page from './Page'
import Search from './Search'
import Success from './Success'
import User from './User'
import Warning from './Warning'

const ICONS = {
  'chevronDown': ChevronDown,
  'chevronUp': ChevronUp,
  'chevronLeft': ChevronLeft,
  'chevronRight': ChevronRight,
  'clock': Clock,
  'close': Close,
  'error': Error,
  'help': Help,
  'home': Home,
  'page': Page,
  'search': Search,
  'success': Success,
  'user': User,
  'warning': Warning
}

const Icon = ({ name, size, extraClass, ...props }) => {
  const SpecificIcon = ICONS[name]
  const IconClasses = cx('ola_icon', `is-${size}`, extraClass)
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fillRule="evenodd" className={IconClasses} {...props}>
      <SpecificIcon />
    </svg>
  )
}

Icon.defaultProps = {
  name: 'help',
  size: 'medium',
  extraClass: null
}

Icon.propTypes = {
  /** Icons */
  name: PT.oneOf([
    'chevronDown',
    'chevronUp',
    'chevronLeft',
    'chevronRight',
    'clock',
    'close',
    'error',
    'help',
    'home',
    'page',
    'search',
    'success',
    'user',
    'warning'
  ]),
  /** Size */
  size: PT.oneOf(['small', 'medium', 'big']),
  /** Extra className */
  extraClass: PT.string
}

export default Icon
