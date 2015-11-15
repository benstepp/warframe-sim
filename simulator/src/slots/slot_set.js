import ModSlot from './mod_slot'

class SlotSet {

  constructor(length = 8) {
    this.slots = new Map()
    for( let i = 0; i < length; i ++ ) {
      this.slots[i] = new ModSlot()
    }
  }

  set_polarity() {

  }

}

export default SlotSet
