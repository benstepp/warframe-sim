import { Rifle } from '../../src/mod_types'
import { Rare } from '../../src/rarities'
import { Madurai } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { SlashDamageStrategy } from '../../src/mod_strategies'

class FangedFusillade extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 6
    this._max_rank = 5
    this._mod_type = new Rifle
    this._polarity = new Madurai
    this._rarity = new Rare
    this._strategies = [ SlashDamageStrategy ]
    this.set_modifier('SlashDamage', new Modifier(0.2))
  }

}

export { FangedFusillade }
