/**
 * @param {boolean} value_1
 * @param {boolean} value_2
 */
function xOr (value_1, value_2) {
  const or = value_1 || value_2
  const equal = value_1 === value_2

  return or && !equal
}

export { xOr }
