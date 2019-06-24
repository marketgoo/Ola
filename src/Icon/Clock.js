import React from 'react'

const SvgClock = props => (
  <svg width="28" height="28" viewBox="0 0 28 28" {...props}>
    <path
      d="M14 2C7.387 2 2 7.387 2 14s5.387 12 12 12 12-5.387 12-12S20.613 2 14 2zm0 2c5.538 0 10 4.462 10 10s-4.462 10-10 10S4 19.538 4 14 8.462 4 14 4zm4.414 13A1 1 0 0 1 17 18.414l-4-4V7a1 1 0 0 1 2 0v6.586L18.414 17z"
    />
  </svg>
)

export default SvgClock
