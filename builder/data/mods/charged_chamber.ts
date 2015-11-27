import { Sniper } from '../../src/mod_types'
import { Uncommon } from '../../src/rarities'
import { Madurai } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { BonusDamageFirstShotStrategy } from '../../src/mod_strategies'

class AmmoDrum extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 2
    this._max_rank = 5
    this._mod_type = new Sniper
    this._polarity = new Madurai
    this._rarity = new Uncommon
    this.set_modifier('BonusDamageFirstShot', new Modifier(0.1))
  }

}

export { AmmoDrum }
