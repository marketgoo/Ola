/**
 * getElementType
 *
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {string|function} A ReactElement type
*/

const getElementType = (Component, props) => {
  const { defaultProps = {} } = Component
  if (props.as && props.as !== defaultProps.as) return props.as
  if (props.href) return 'a'
  return defaultProps.as || 'div'
}

export { getElementType }




/**
 * normalizeRange
 *
 * Returns a number with a normalized range based on the max and min value.
 * Useful for calculating ChartColumnValue values where is a number between 0 and 1.
 * @param {val} Value of current element
 * @param {max} Max value of all elements 
 * @param {min} Min value of all elements 
 * @returns {number} 
*/
const normalizeRange = (val, max, min = 0) => (val === null || val === undefined) ? null : (val - min) / (max - min)
export { normalizeRange }

export function getRanges(...rows) {
  let max = 0
  rows.forEach((row) => max = Math.max(max, ...row))

  return new Array(rows[0].length)
    .fill([])
    .map((value, index) =>
      rows.map((row) => normalizeRange(row[index], max))
    )
}