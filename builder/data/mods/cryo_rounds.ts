import { Rifle } from '../../src/mod_types'
import { Uncommon } from '../../src/rarities'
import { Varazin } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { ColdDamageStrategy } from '../../src/mod_strategies'

class CryoRounds extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 6
    this._max_rank = 5
    this._mod_type = new Rifle
    this._polarity = new Varazin
    this._rarity = new Uncommon
    this._strategies = [ ColdDamageStrategy ]
    this.set_modifier('ColdDamage', new Modifier(0.05))
  }

}

export { CryoRounds }
