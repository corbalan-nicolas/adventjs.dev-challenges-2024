/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    // Code here
    let marco = "";
    const maxLength = Math.max(...names.map((name) => name.length)) + 4;
  
    marco += `${'*'.repeat(maxLength)}\n`;
  
    for(let name of names) {
      marco += "* " + name;
      let cantEspacios = maxLength - name.length - 4;
      marco += `${' '.repeat(cantEspacios)} *\n`;
    }
  
    marco += `${'*'.repeat(maxLength)}`;
  
    return marco;
  }