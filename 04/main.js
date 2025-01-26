/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    /* Code here */
    let tree = ''
    const maxWidth = height * 2 - 1
    let currentWidth = 1
    for(let i = 0; i < height; i++) {
        const spacesLeft = Math.floor((maxWidth - currentWidth) / 2)
        
        tree += `${'_'.repeat(spacesLeft)}${ornament.repeat(currentWidth)}${'_'.repeat(spacesLeft)}\n`
        
        currentWidth += 2
    }

    const spacesLeft = Math.floor((maxWidth - 1) / 2)
    const string = '_'.repeat(spacesLeft)
    tree += `${string}#${string}\n`
    tree += `${string}#${string}`
    
    return tree
  }