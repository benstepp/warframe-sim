import { BaseMod, Mod, Modifier } from '../../src/mods'
import { Rare } from '../../src/rarities'
import { Rifle } from '../../src/mod_types'
import { Naramon } from '../../src/polarities'
import { CriticalChanceStrategy, FireRateStrategy } from '../../src/mod_strategies'

class CriticalDelay extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._max_rank = 5
    this._cost = 4
    this._polarity = new Naramon
    this._rarity = new Rare
    this._mod_type = new Rifle
    this._strategies = [ CriticalChanceStrategy, FireRateStrategy ]
    this.set_modifier('CriticalChance', new Modifier(0.08))
    this.set_modifier('FireRate', new Modifier(-0.06))
  }

}

export { CriticalDelay }
