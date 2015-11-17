import ModSlot from './mod_slot'

class SlotSet {

  constructor(length = 8) {
    this.slots = new Map()
    for( let i = 0; i < length; i ++ ) {
      this.slots.set(i, new ModSlot())
    }
  }

  change_polarity(polarity, slot) {
    this.slots.get(slot).change_polarity(polarity)
  }

  change_mod(mod, slot) {
    this.slots.get(slot).change_mod(mod)
  }

  includes_mod(mod) {
    let included_test = false
    this._iterate( (mod_slot) => {
      if (mod_slot.includes_mod(mod)) { included_test = true }
    })
    return included_test
  }

  get used_capacity() {
    let sum = 0
    this.slots.forEach( (mod_slot) => {
      sum += mod_slot.used_capacity
    })
    return sum
  }

  _iterate(callback) {
    for( let [slot, mod_slot] of this.slots ) {
      callback(mod_slot)
    }
  }

}

export default SlotSet
