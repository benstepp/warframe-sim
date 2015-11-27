import { BaseMod, Mod, Modifier } from '../../src/mods'
import { Common } from '../../src/rarities'
import { Shotgun } from '../../src/mod_types'
import { Madurai } from '../../src/polarities'
import { CriticalChanceStrategy } from '../../src/mod_strategies'

class Blunderbuss extends BaseMod implements Mod {

  constructor(rank?: number) {
    super()
    this._rank = rank || 0
    this._max_rank = 5
    this._cost = 4
    this._polarity = new Madurai
    this.rarity = new Common
    this.mod_type = new Shotgun
    this.strategies = [ CriticalChanceStrategy ]
    this.set_modifier('CriticalChance', new Modifier(0.15))
  }

}

export { Blunderbuss }
