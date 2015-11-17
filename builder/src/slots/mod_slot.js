import { NullPolarity } from '../polarities'

class ModSlot {

  constructor(polarity = new NullPolarity, mod) {
    this.polarity = polarity
    this.mod = mod
  }

  get used_capacity() {
    const used = this._used_capacity_value
    return this._rounded(used)
  }

  change_polarity(polarity) {
    this.polarity = polarity
  }

  change_mod(mod) {
    this.mod = mod
  }

  includes_mod(mod) {
    return (this.mod === mod)
  }

  get _used_capacity_value() {
    if (this.mod.polarity.type === this.polarity.type) {
      return this._matched_polarity
    } else {
      return this._unmatched_polarity
    }
  }

  get _unmatched_polarity() {
    return this.mod.drain * this.polarity.unmatched_multiplier
  }

  get _matched_polarity() {
    return this.mod.drain * this.polarity.matched_multiplier
  }

  _rounded(used_capacity) {
    if (used_capacity < 0) {
      return Math.ceil(used_capacity)
    } else {
      return Math.floor(used_capacity)
    }
  }

}

export default ModSlot
