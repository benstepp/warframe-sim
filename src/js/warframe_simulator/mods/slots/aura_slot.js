import ModSlot from './mod_slot'

class AuraSlot extends ModSlot {

  constructor(polarity, mod) {
    super(polarity, mod)
  }

  get used_capacity() {
    if (this.mod.polarity === this.polarity) {
      return this.mod.capacity / this.polarity.matched_multiplier
    } else if (this.mod.polarity !== this.polarity) {
      return this.mod.capacity / this.polarity.unmatched_multiplier
    }
  }

}

export default AuraSlot
