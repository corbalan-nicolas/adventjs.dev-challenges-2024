/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  // Code here
  return filename.slice(filename.indexOf('_') + 1, filename.lastIndexOf('.'))
}


console.log('console.log 1: ' + decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log('console.log 2: ' + decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log('console.log 3: ' + decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv"