import ModSlot from './mod_slot'

class SlotSet {

  constructor(length = 8) {
    this.slots = new Map()
    for( let i = 0; i < length; i ++ ) {
      this.slots[i] = new ModSlot()
    }
  }

  change_polarity(polarity, slot) {
    this.slots[slot].change_polarity(polarity)
  }

  change_mod(mod, slot) {
    this.slots[slot].change_mod(mod)
  }

  get used_capacity() {
    let sum = 0
    this.slots.forEach( (mod_slot) => {
      sum += mod_slot.used_capacity
    })
    return sum
  }

}

export default SlotSet
