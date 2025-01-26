/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const newInventory = {}
    for(const item of inventory) {
        const category = item.category
        const name = item.name
        const quantity = item.quantity
        
        newInventory[category] ??= {}
        newInventory[category][name] = (newInventory[category][name] += quantity) || quantity
    }
    return newInventory
}