/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let inBox = false
    let giftSymbol = '*'
    let boxWidth = 1
    
    for(let i = 1; i < box.length - 1; i++) {
        if (box[i].includes(giftSymbol)) {
            for(let j = boxWidth; j < box[i].length - boxWidth; j++) {
                if(box[i][j] === giftSymbol) inBox = true
            }
        }
    }
    
    return inBox
  }