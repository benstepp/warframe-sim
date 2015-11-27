import { BaseMod, Mod, Modifier } from '../../src/mods'
import { Legendary } from '../../src/rarities'
import { Madurai } from '../../src/polarities'
import { CriticalChanceStrategy } from '../../src/mod_strategies'

class PrimedPistolGambit extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._max_rank = 10
    this._cost = 2
    this._polarity = new Madurai
    this.rarity = new Legendary
    this._strategies = [ CriticalChanceStrategy ]
    this.set_modifier('CriticalChance', new Modifier(0.17))
  }

}

export { PrimedPistolGambit }
