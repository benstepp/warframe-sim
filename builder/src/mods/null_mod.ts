import { BaseMod } from './base_mod'
import { Mod } from './mod'
import { NullPolarity } from '../polarities'

class NullMod extends BaseMod implements Mod {

  constructor(rank?: number) {
    super()
    this._rank = 0
    this._max_rank = 0
    this._cost = 0
    this._polarity = new NullPolarity
  }

}

export { NullMod }
