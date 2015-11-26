import { Mod } from './mod'

/**
 * The BaseMod controls behavior shared across all mods.
 * This includes changing the rank of the mod
 */
class BaseMod implements Mod {
  _cost: number
  _max_rank: number
  _rank: number

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
   * Returns the internal rank property
   */
  get rank() {
    return this._rank
  }

  /**
   * Only allows the setting of the internal rank
   * property if the rank is possitive. This reflects
   * the in game behavior.
   */
  set rank(rank: number) {
    if(rank >= 0) this._rank = rank
  }

  get max_rank() {
    return this._max_rank
  }

  set max_rank(max_rank: number) {
    if (max_rank >=0) this._max_rank = max_rank
  }

  get cost() {
    return this._cost
  }
}

export { BaseMod }
