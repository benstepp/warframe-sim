import { Rifle } from '../../src/mod_types'
import { Rare } from '../../src/rarities'
import { Madurai } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { AccuracyStrategy, DamageStrategy } from '../../src/mod_strategies'

class HeavyCaliber extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 6
    this._max_rank = 10
    this._mod_type = new Rifle
    this._polarity = new Madurai
    this._rarity = new Rare
    this._strategies = [ AccuracyStrategy, DamageStrategy ]
    this.set_modifier('Accuracy', new Modifier(-0.05))
    this.set_modifier('Damage', new Modifier(0.15))
  }

}

export { HeavyCaliber }
