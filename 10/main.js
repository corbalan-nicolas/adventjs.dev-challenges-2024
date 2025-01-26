/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
*/
function compile(instructions) {
  // Code here
  const records = {}
  let index = 0

  bucle: do {
    const curr = instructions[index].split(' ')

    // Validation
    for(let i = 1; i < curr.length; i++) {
      if(isNaN(parseInt(curr[i])) && records[curr[i]] === undefined) {
        records[curr[i]] = 0
      }
    }

    // Action
    switch(curr[0]) {
      case 'MOV':
        if(isNaN(parseInt(curr[1]))) {
          records[curr[2]] = records[curr[1]]
        }else {
          records[curr[2]] = curr[1]
        }
        break
      case 'INC':
        records[curr[1]]++
        break
      case 'JMP':
        if(records[curr[1]] === 0) {
          index = parseInt(curr[2])
          continue bucle
        }
        break
      case 'DEC':
        records[curr[1]]--
        break
      default:
        break
    }

    index++
  }while(index < instructions.length)

  return records['A']
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]
/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */














console.log(compile(instructions)); // -> 2

