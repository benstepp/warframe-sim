import { Bow } from '../../src/mod_types'
import { Rare } from '../../src/rarities'
import { Naramon } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'

class ArrowMutation extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 2
    this._max_rank = 5
    this._mod_type = new Bow
    this._polarity = new Naramon
    this._rarity = new Rare
  }

}

export { ArrowMutation }
