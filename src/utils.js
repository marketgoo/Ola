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
