/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    return gifts.sort((a, b) => a - b).filter((actual, i)=> actual !== gifts[i - 1])
  }
  