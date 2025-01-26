/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  // Code here
  const reno = 'r'
  const snow = '~'
  let race = ''

  for(let i = 0; i < indices.length; i++) {
    const initialSpaces = ' '.repeat(indices.length - (i + 1))
    let line = snow.repeat(length).split('')
    const termination = ` /${i + 1}` + ((i == indices.length - 1)? '': '\n')

    if(indices[i] !== 0) line.splice(indices[i], 1, reno)
    line = line.join('')
    
    race += initialSpaces + line + termination
  }
  return race
}

console.log('\ndrawRace([0, 5, -3], 10)\n' + drawRace([0, 5, -3], 10) + '\n')

/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/