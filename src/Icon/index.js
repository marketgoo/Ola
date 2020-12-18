import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

// Icons
import ArrowDown from './ArrowDown'
import ArrowUp from './ArrowUp'
import ChevronDown from './ChevronDown'
import ChevronUp from './ChevronUp'
import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'
import Clock from './Clock'
import Close from './Close'
import Error from './Error'
import Help from './Help'
import Home from './Home'
import Null from './Null'
import Page from './Page'
import Plus from './Plus'
import Post from './Post'
import Search from './Search'
import StaticPage from './StaticPage'
import Success from './Success'
import User from './User'
import Warning from './Warning'
import NewWindow from './NewWindow'


const ICONS = {
  'arrowDown': ArrowDown,
  'arrowUp': ArrowUp,
  'chevronDown': ChevronDown,
  'chevronUp': ChevronUp,
  'chevronLeft': ChevronLeft,
  'chevronRight': ChevronRight,
  'clock': Clock,
  'close': Close,
  'error': Error,
  'help': Help,
  'home': Home,
  'null': Null,
  'page': Page,
  'plus': Plus,
  'post': Post,
  'search': Search,
  'staticPage': StaticPage,
  'success': Success,
  'user': User,
  'warning': Warning,
  'newWindow': NewWindow
}

const Icon = ({ name, size, status, className, ...props }) => {
  const SpecificIcon = ICONS[name]

  const styles = cx(
    'ola_icon',
    `is-${size}`,
    { 'ola-skeleton': status !== 'loaded' },
    { 'is-loading': status === 'loading' },
    className
  )

  if (status !== 'loaded') {
    return <div className={styles}><span></span></div>
  }

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fillRule="evenodd" className={styles} {...props}>
      <SpecificIcon />
    </svg>
  )
}

Icon.defaultProps = {
  name: 'help',
  size: 'medium',
  className: null,
  status: 'loaded'
}

Icon.propTypes = {
  /** Icons */
  name: PT.oneOf(Object.keys(ICONS)),
  /** Size */
  size: PT.oneOf(['small', 'medium', 'big']),
  /** Kpi status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
  /** Extra className */
  className: PT.string
}

export default Icon
