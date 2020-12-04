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
 * Returns a number with a normalizade range based on the max and min value.
 * Useful for calculating ChartColumnValue values where is a number between 0 and 1.
 * @param {val} Value of current element
 * @param {max} Max value of all elements 
 * @param {min} Min value of all elements 
 * @returns {number} 
*/
const normalizeRange = (val, max, min = 0) => (val - min) / (max - min)
export { normalizeRange }

export function getRanges(values) {
  const max = Math.max(...values)
  return values.map(value => normalizeRange(value, max))
}