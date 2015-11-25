import { BaseMod, WeaponMod } from '../../src/mod'

class Serration extends BaseMod implements WeaponMod {

  constructor(rank?: number) {
    super()
    this.rank = rank || 1
    this.max_rank = 10
  }

  accept(weapon: any) {
    return weapon
  }

}

export { Serration }
