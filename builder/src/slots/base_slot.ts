import { Slot } from './slot'
import { Polarity, NullPolarity } from '../polarities'
import { Mod, NullMod } from '../mods'

class BaseSlot implements Slot {
  _polarity: Polarity
  _mod: Mod

  /**
   * Initialize with a polarity or set the polarity to
   * a null polarity to signify the lack of polarity.
   * A mod can also be used.
   */
  constructor(polarity?: Polarity, mod?: Mod) {
    this.polarity = polarity || new NullPolarity
    this.mod = mod || new NullMod
  }

  /**
   * Sets the polarity of the slot. This method is called
   * if the polarity needs to change (eg. Forma)
   */
  set polarity(polarity: Polarity) {
    this._polarity = polarity || new NullPolarity
  }

  get polarity() {
    return this._polarity
  }

  /**
   * Sets the mod of the slot
   */
  set mod(mod: Mod) {
    this._mod = mod
  }

  get mod() {
    return this._mod
  }

  get used_capacity() {
    return -this.get_used_capacity()
  }

  get_used_capacity() {
    if (this._mod.polarity === this._polarity) {
      return this.matched_capacity
    } else {
      return this.unmatched_capacity
    }
  }

  get matched_capacity() {
    return this._mod.cost / this._polarity.multiplier
  }

  get unmatched_capacity() {
    return this._mod.cost * this._polarity.multiplier
  }

}

export { BaseSlot }
