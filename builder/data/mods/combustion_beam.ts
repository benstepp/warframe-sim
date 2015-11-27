import { BaseMod, Mod, Modifier } from '../../src/mods'
import { Rare } from '../../src/rarities'
import { Primary } from '../../src/mod_types'
import { Madurai } from '../../src/polarities'

class CombustionBeam extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._max_rank = 5
    this._cost = 4
    this._polarity = new Madurai
    this._rarity = new Rare
    this._mod_type = new Primary
    this.set_modifier('ExplodingDamage', new Modifier(100))
  }

}

export { CombustionBeam }
