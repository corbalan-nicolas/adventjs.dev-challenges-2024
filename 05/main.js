/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const shoesLeft = [];
    const shoesRight = [];
    const avaliableShoes = [];
    
    for(const shoe of shoes) {
        if(shoe.type === "I") {
            if(shoesRight.includes(shoe.size)) {
                avaliableShoes.push(shoe.size)
                const index = shoesRight.indexOf(shoe.size)
                shoesRight.splice(index, 1)
            }else {
                shoesLeft.push(shoe.size);
            }
        }else if(shoe.type === "R") {
            if(shoesLeft.includes(shoe.size)) {
                avaliableShoes.push(shoe.size)
                const index = shoesLeft.indexOf(shoe.size)
                shoesLeft.splice(index, 1)
            }else {
                shoesRight.push(shoe.size);
            }
        }
    }
    return avaliableShoes;
  }