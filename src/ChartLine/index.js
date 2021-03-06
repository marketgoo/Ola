import React from 'react'
import {default as PT} from 'prop-types'
import cx from 'classnames'
import ChartLineLabel from './Label'

const ChartLine = ({ status, children, ranges, colors, className, rule }) => {
  const styles = cx(
    'ola_chartLine',
    { 'ola-skeleton': status !== 'loaded' },
    { 'is-loading': status === 'loading' },
    { 'is-multiple': ranges[0] && ranges[0].length > 1 },
    className
  )

  if (status !== 'loaded') {
    ranges = [[0.6], [0.3], [0.8]]
    colors = []
    children = ranges.map((value, index) => <ChartLineLabel value={ value } key={ index }></ChartLineLabel>)
  }

  const lines = separateRanges(ranges)
  lines.forEach((line, index) => line.color = colors[index])
  const max = ranges.map(range => Math.max(...range))
  const fillD = `M 0 0 ${drawPath(max)} V 0 H 0 Z`

  return (
    <div className={ styles }>
      { children }
      {
        <svg role="img" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="ola_chartLine-svg">
          <path d={fillD} vectorEffect="non-scaling-stroke" strokeLinejoin="round" className="ola_chartLine-svg-background" />
          {
            lines.reverse().map((line, index) => {
              const draw = drawPath(line)
              const lineD = `${draw}`
              const style = line.color ? {'--color': line.color} : undefined
              return <path key={index} d={lineD} vectorEffect="non-scaling-stroke" strokeLinejoin="round" className="ola_chartLine-svg-line" style={style} />
            })
          }
        </svg>
      }
      { rule && <span className="ola_chartLine-rule" style={{ '--value': rule.value }}>{ rule.name} </span> }
    </div>
  )
}

ChartLine.defaultProps = {
  ranges: [],
  colors: [],
  status: 'loaded',
  className: null,
}

ChartLine.propTypes = {
  /** All range values */
  ranges: PT.arrayOf(PT.arrayOf(PT.number)).isRequired,
  /** All color values */
  colors: PT.arrayOf(PT.string),
  /** Chart status */
  status: PT.oneOf(['loaded', 'loading', 'empty']),
  /** Extra className */
  className: PT.string,
  /** Childen nodes */
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Horizontal rule */
  rule: PT.exact({
    name: PT.string,
    value: PT.number,
  })
}

export default ChartLine

function drawPath(values) {
  const distance = 100 / values.length
  const commands = []
  let x = distance / 2

  values.forEach((value, index) => {
    if (typeof value === 'number') {
      if (!commands.length) {
        commands.push(`M ${index > 0 ? x : 0} ${getYPosition(value)}`)
      }
  
      commands.push(`L ${x} ${getYPosition(value)}`)

      if (index === values.length - 1) {
        commands.push(`L 100 ${getYPosition(values[values.length - 1])}`)
      }
    }

    x += distance
  })

  return commands.join(' ')
}

function getYPosition(value) {
  if (!value) {
    return 155
  }
  return 150 - (value * 150) + 5
}

function separateRanges(ranges) {
  if (!ranges.length) {
    return []
  }

  return new Array(ranges[0].length)
    .fill([])
    .map((value, index) =>
      ranges.map((range) => range[index])
    )
}