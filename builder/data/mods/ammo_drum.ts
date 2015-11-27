import { Rifle } from '../../src/mod_types'
import { Common } from '../../src/rarities'
import { Naramon } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { AmmoMaximumStrategy } from '../../src/mod_strategies'

class AmmoDrum extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 2
    this._max_rank = 5
    this._mod_type = new Rifle
    this._polarity = new Naramon
    this._rarity = new Common
    this._strategies = [ AmmoMaximumStrategy ]
    this.set_modifier('AmmoMaximum', new Modifier(0.05))
  }

}

export { AmmoDrum }
