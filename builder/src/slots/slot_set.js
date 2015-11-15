import ModSlot from './mod_slot'

class SlotSet {

  constructor(length = 8) {
    this.slots = new Map()
    for( let i = 0; i < length; i ++ ) {
      this.slots[i] = new ModSlot()
    }
  }

  change_polarity(polarity, slot) {
    this.slots[slot].polarity = polarity
  }

}

export default SlotSet
