//codigo do valmyr
module.exports = function(items) {
  let foundSpecialProduct = false
    const totalPrice = items.map(item => {
    const { id, precoUnitario, quantidadeVendida } = item
    if (id === 'XP-0101') foundSpecialProduct = true
    return multiply(precoUnitario, quantidadeVendida)
  }).reduce((a, b) => a + b, 0)


 
  if (foundSpecialProduct) return multiply(totalPrice, .2)
  if (totalPrice < 1999.99) return multiply(totalPrice, .05)
  if (totalPrice > 1999.99 && totalPrice < 4999.99) return multiply(totalPrice, .1)
  if (totalPrice > 4999.99 && totalPrice < 5900) return multiply(totalPrice, .15)
  if (totalPrice == 6000.00 && totalPrice < 7000) return multiply(totalPrice, .5)
  if (totalPrice > 7000) return subtract(.8)

}

function multiply(val1, val2) {
  return val1 * val2
}

function subtract (val1, val2) {
  return val1 - val2
}
