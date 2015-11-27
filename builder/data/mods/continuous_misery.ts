import { BaseMod, Mod, Modifier } from '../../src/mods'
import { Common } from '../../src/rarities'
import { Rifle } from '../../src/mod_types'
import { Madurai } from '../../src/polarities'
import { StatusDurationStrategy } from '../../src/mod_strategies'

class Blunderbuss extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._max_rank = 3
    this._cost = 4
    this._polarity = new Madurai
    this._rarity = new Common
    this._mod_type = new Rifle
    this._strategies = [ StatusDurationStrategy ]
    this.set_modifier('StatusDuration', new Modifier(0.25))
  }

}

export { Blunderbuss }
