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
export function normalizeRange(val, max, min = 0) {
  if (val === null || val === undefined) {
    return null
  }
  if (max === min) {
    return 0
  }
  if (val === min) {
    return val / max
  }
  return (val - min) / (max - min)
}

/**
 * getRanges
 * 
 * Execute normalizeRange to an array or multiple arrays for multiple values
 * 
 * @param  {...array} rows 
 * @returns {array}
 */
export function getRanges(...rows) {
  let max = 0
  rows.forEach((row) => max = Math.max(max, ...row))

  return new Array(rows[0].length)
    .fill([])
    .map((value, index) =>
      rows.map((row) => normalizeRange(row[index], max))
    )
}

/**
 * getNumberFormat
 *
 * Returns a formatted number.
 * Useful for numbers depending language notation.
 * @param {number} Value of current element
 * @param {format}  value of the language. 
 * @param {options} NumberFormat method values. 
 * @returns {number} 
*/

export function getNumberFormat(number,
  language = 'en-US',
  options = {
    notation: 'compact',
    maximumFractionDigits: 2
  }) {
  return new Intl.NumberFormat(language, options).format(number)
}

/**
 * Copy to clipboard a text.
 * @param {String} text - text to copy
 */
export function copyToClipboard(text) {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText(text)
  } else {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}

export function debounce(fn, timeout = 100){
  let timer
  return (...args) => {
    if (!timer) { fn.apply(this, args) }
    clearTimeout(timer)
    timer = setTimeout(() => { timer = undefined }, timeout)
  }
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, 
        v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
}