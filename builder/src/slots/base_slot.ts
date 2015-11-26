import { Slot } from './slot'
import { Polarity, NullPolarity } from '../polarities'
import { Mod } from '../mods'

class BaseSlot implements Slot {
  _polarity: Polarity
  _mod: Mod

  /**
   * Initialize with a polarity or set the polarity to
   * a null polarity to signify the lack of polarity
   */
  constructor(polarity?: Polarity) {
    this.polarity = polarity || new NullPolarity
  }

  /**
   * Sets the polarity of the slot. This method is called
   * if the polarity needs to change (eg. Forma)
   */
  set polarity(polarity: Polarity) {
    this._polarity = polarity
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
    const cost = this._mod.cost
    const multiplier = this._polarity.multiplier
    if (this._mod.polarity === this._polarity) {
      return cost / multiplier
    } else {
      return cost * multiplier
    }
  }

}

export { BaseSlot }
