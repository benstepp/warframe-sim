import { Rifle } from '../../src/mod_types'
import { Rare } from '../../src/rarities'
import { Madurai } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { BlastRadiusStrategy } from '../../src/mod_strategies'

class Firestorm extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 6
    this._max_rank = 3
    this._mod_type = new Rifle
    this._polarity = new Madurai
    this._rarity = new Rare
    this._strategies = [ BlastRadiusStrategy ]
    this.set_modifier('BlastRadius', new Modifier(0.06))
  }

}

export { Firestorm }
