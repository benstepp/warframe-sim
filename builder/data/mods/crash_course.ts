import { BaseMod, Mod, Modifier } from '../../src/mods'
import { Rare } from '../../src/rarities'
import { Rifle } from '../../src/mod_types'
import { Naramon } from '../../src/polarities'
import { ImpactDamageStrategy } from '../../src/mod_strategies'

class CrashCourse extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._max_rank = 5
    this._cost = 6
    this._polarity = new Naramon
    this._rarity = new Rare
    this._mod_type = new Rifle
    this._strategies = [ ImpactDamageStrategy ]
    this.set_modifier('ImpactDamage', new Modifier(0.2))
  }

}

export { CrashCourse }
