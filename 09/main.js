'use strict'

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  // Code here
  const locomotiveLocation = {'x': -1, 'y': -1} // x / y
  const messages = {
    'o': 'crash',
    '*': 'eat',
    '·': 'none'
  }
  let movements = {}

  // Localize
  for(let y in board) {
    if(board[y].includes('@')) {
      locomotiveLocation.y = +y
      locomotiveLocation.x = board[y].indexOf('@')
      break
    }
  }

  // Calculate movement
  movements = {
    'U': {x: locomotiveLocation.x, y: locomotiveLocation.y - 1},
    'D': {x: locomotiveLocation.x, y: locomotiveLocation.y + 1},
    'R': {y: locomotiveLocation.y, x: locomotiveLocation.x + 1},
    'L': {y: locomotiveLocation.y, x: locomotiveLocation.x - 1}
  }

  // Check boundaries
  const newX = movements[mov].x;
  const newY = movements[mov].y;
  if (newX < 0 || newX >= board[0].length || newY < 0 || newY >= board.length) {
    return 'crash';
  }

  // Find the character
  let chara = board[newY][newX];
  
  return messages[chara];
}

let board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log('------BOARD------');
board.forEach(c => {
  console.log(c)
})

console.log('\n------MOVES------');
console.log('U: ' + moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log('D: ' + moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log('L: ' + moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log('R: ' + moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha