import { Rarity } from '../rarities'
import { Polarity } from '../polarities'
import { Modifier } from './modifier'
import { ModType } from '../mod_types'

/**
 * The BaseMod controls behavior shared across all mods.
 * This includes changing the rank of the mod
 */
class BaseMod {
  _cost: number
  _max_rank: number
  _rank: number
  _modifiers: Map<string, Modifier>
  _polarity: Polarity
  mod_type: ModType
  rarity: Rarity

  /**
   * Increases the rank of the mod. Does not increase the
   * rank of the mod past its maximum
   */
  increase_rank() {
    if (this._rank !== this._max_rank) this._rank++
  }

  /**
   * Decrease the rank of the mod. Cannot be used to
   * get to a negative rank.
   */
  decrease_rank() {
    if (this._rank !== 0) this._rank--
  }

  /**
   * Returns the internal rank property. Returns zero
   * if it has not been set yet.
   */
  get rank() {
    return (this._rank || 0)
  }

  /**
   * Only allows the setting of the internal rank
   * property if the rank is possitive. This reflects
   * the in game behavior.
   */
  set rank(rank: number) {
    if(rank >= 0) this._rank = rank
  }

  /**
   * Returns the internal max rank property. Returns zero
   * if it has not been set yet
   */
  get max_rank() {
    return (this._max_rank || 0)
  }

  /**
   * Sets the internal max rank property if the value
   * is valid.
   */
  set max_rank(max_rank: number) {
    if (max_rank >=0) this._max_rank = max_rank
  }

  /**
   * Sets the internal cost property if the value
   * is valid.
   */
  set cost(cost: number) {
    if (cost >= 0) this._cost = cost
  }

  /**
   * Returns the total cost of the mod. The only way to
   * get the raw cost is to use the internal property.
   * This is because there is no reason the user needs to
   * see this value in normal use.
   */
  get cost() {
    return this._cost + this.rank
  }

  /**
   * Returns the internal polarity property.
   */
  get polarity() {
    return this._polarity
  }

  /**
   * Only allow setting of the internal polarity property if
   * it adheres to the Polarity interface.
   */
  set polarity(polarity: Polarity) {
    this._polarity = polarity
  }

  get_modifier(modifier: string) {
    return this._modifiers.get(modifier).value(this.rank) || 0
  }

  set_modifier(modifier: string, value: Modifier) {
    this._modifiers.set(modifier, value)
  }

  get strategies() {
    return []
  }

}

export { BaseMod }
