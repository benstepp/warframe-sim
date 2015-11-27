import { Rifle } from '../../src/mod_types'
import { Uncommon } from '../../src/rarities'
import { Naramon } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { FireDamageStrategy } from '../../src/mod_strategies'

class Hellfire extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 6
    this._max_rank = 5
    this._mod_type = new Rifle
    this._polarity = new Naramon
    this._rarity = new Uncommon
    this._strategies = [ FireDamageStrategy ]
    this.set_modifier('FireDamage', new Modifier(0.15))
  }

}

export { Hellfire }
