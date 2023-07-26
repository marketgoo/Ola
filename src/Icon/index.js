import React from 'react'
import { default as PT } from 'prop-types'
import cx from 'classnames'

// Icons
import Add from './Add'
import Analytics from './Analytics'
import ArrowDown from './ArrowDown'
import ArrowDownFill from './ArrowDownFill'
import ArrowRight from './ArrowRight'
import ArrowUp from './ArrowUp'
import ArrowUpFill from './ArrowUpFill'
import ChevronDown from './ChevronDown'
import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'
import ChevronUp from './ChevronUp'
import Clock from './Clock'
import Close from './Close'
import Copy from './Copy'
import Error from './Error'
import Edit from './Edit'
import Help from './Help'
import Home from './Home'
import InformationCircle from './InformationCircle'
import Line from './Line'
import Link from './Link'
import NewWindow from './NewWindow'
import Null from './Null'
import Page from './Page'
import Plus from './Plus'
import Post from './Post'
import Search from './Search'
import Site from './Site'
import StaticPage from './StaticPage'
import Success from './Success'
import User from './User'
import Warning from './Warning'

export const ICONS = {
  add: Add,
  analytics: Analytics,
  arrowDown: ArrowDown,
  arrowDownFill: ArrowDownFill,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowUpFill: ArrowUpFill,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  clock: Clock,
  close: Close,
  copy: Copy,
  edit: Edit,
  error: Error,
  help: Help,
  home: Home,
  informationCircle: InformationCircle,
  line: Line,
  link: Link,
  newWindow: NewWindow,
  null: Null,
  page: Page,
  plus: Plus,
  post: Post,
  search: Search,
  site: Site,
  staticPage: StaticPage,
  success: Success,
  user: User,
  warning: Warning,
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
    return (
      <div className={styles}>
        <span></span>
      </div>
    )
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fillRule="evenodd"
      className={styles}
      {...props}
    >
      <SpecificIcon />
    </svg>
  )
}

Icon.defaultProps = {
  name: 'help',
  size: 'medium',
  className: null,
  status: 'loaded',
}

Icon.propTypes = {
  /** Icons */
  name: PT.oneOf(Object.keys(ICONS)),
  /** Size */
  size: PT.oneOf(['small', 'medium', 'big']),
  /** Kpi status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
  /** Extra className */
  className: PT.string,
}

export default Icon
