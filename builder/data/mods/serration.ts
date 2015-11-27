import { BaseMod, WeaponMod } from '../../src/mods'
import { Madurai } from '../../src/polarities'

class Serration extends BaseMod implements WeaponMod {

  constructor(rank?: number) {
    super(rank)
    this._max_rank = 10
    this._cost = 4
    this._polarity = new Madurai
  }

  accept(weapon: any) {
    return weapon
  }

}

export { Serration }
