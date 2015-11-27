import { Rifle } from '../../src/mod_types'
import { Uncommon } from '../../src/rarities'
import { Madurai } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { DamageToCorpusStrategy } from '../../src/mod_strategies'

class BaneOfCorpus extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 4
    this._max_rank = 5
    this._mod_type = new Rifle
    this._polarity = new Madurai
    this._rarity = new Uncommon
    this._strategies = [ DamageToCorpusStrategy ]
    this.set_modifier('DamageToCorpus', new Modifier(0.05))
  }

}

export { BaneOfCorpus }