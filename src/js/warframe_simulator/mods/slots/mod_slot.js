class ModSlot {

  constructor(polarity, mod) {
    this.polarity = polarity
    this.mod = mod
  }

  get used_capacity() {
    if (this.mod.polarity === this.polarity) {
      return this.mod.capacity * this.polarity.matched_multiplier
    } else if (this.mod.polarity !== this.polarity) {
      return this.mod.capacity * this.polarity.unmatched_multiplier
    }
  }

}

export default ModSlot
