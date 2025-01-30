const thousandSeparator = (val) => {
  let result = parseFloat(val).toString()

  return result.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export { thousandSeparator }
