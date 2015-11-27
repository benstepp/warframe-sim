import { Rifle } from '../../src/mod_types'
import { Uncommon } from '../../src/rarities'
import { Naramon } from '../../src/polarities'
import { BaseMod, Mod, Modifier } from '../../src/mods'
import { ZoomStrategy } from '../../src/mod_strategies'

class EagleEye extends BaseMod implements Mod {

  constructor(rank?: number) {
    super(rank)
    this._cost = 4
    this._max_rank = 3
    this._mod_type = new Rifle
    this._polarity = new Naramon
    this._rarity = new Uncommon
    this._strategies = [ ZoomStrategy ]
    this.set_modifier('Zoom', new Modifier(0.1))
  }

}

export { EagleEye }
