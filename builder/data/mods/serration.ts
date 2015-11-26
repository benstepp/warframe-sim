import { BaseMod, WeaponMod } from '../../src/mods'

class Serration extends BaseMod implements WeaponMod {

  constructor(rank?: number) {
    super()
    this._rank = rank || 1
    this._max_rank = 10
    this._cost = 4
  }

  accept(weapon: any) {
    return weapon
  }

  get cost() {
    return this._cost + this._rank
  }

}

export { Serration }
