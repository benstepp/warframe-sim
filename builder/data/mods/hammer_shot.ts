import { Rifle } from '../../src/mod_types'
import { Rare } from '../../src/rarities'
import { Varazin } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { CritDamageStrategy, StatusChanceStrategy } from '../../src/mod_strategies'

class HammerShot extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 6
    this._max_rank = 3
    this._mod_type = new Rifle
    this._polarity = new Varazin
    this._rarity = new Rare
    this._strategies = [ CritDamageStrategy, StatusChanceStrategy ]
    this.set_modifier('CritDamage', new Modifier(0.15))
    this.set_modifier('StatusChance', new Modifier(0.10))
  }

}

export { HammerShot }
