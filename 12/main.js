/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  // Code here
  const validOrnaments = ['*', 'o', '^', '#', '@']
  const prices = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  }
  let finalPrice = ornaments.split('').reduce((accumulator, currentOrnament, index) => {
    if(accumulator === undefined) return undefined
    if(!validOrnaments.includes(currentOrnament)) return undefined

    let priceCurrentOrnament = prices[currentOrnament]
    const priceNextOrnament = prices[ornaments[index + 1]] ?? 0

    if(priceCurrentOrnament < priceNextOrnament) priceCurrentOrnament *= -1

    return accumulator += priceCurrentOrnament
  }, 0)

  return finalPrice
}

console.log(calculatePrice('*o@'))