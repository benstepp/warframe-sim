const PRECISION_REGEX = /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/

/**
 * Many stats are modeled in the same way. This class
 * manages the similarity in them all to reduce duplication
 */
class BaseStat {
  base: number
  _modifier: number
  _precision: number

  /**
   * Initialized with the base value of the crit stats
   */
  constructor(base?: number) {
    this.base = base || 0
    this.modifier = 0
    this._precision = this.determine_precision(base)
  }

  /**
   * Add to the stat modifer.
   */
  add_modifier(modifier: number) {
    this.modifier += modifier
    this.save_precision(modifier)
  }

  /**
   * This is the default setter for the internal
   * modifier value.
   */
  set modifier(mod: number) {
    this._modifier = mod
  }

  /**
   * Round the modifier to the most precise value given.
   * Javascript floats yo
   */
  get modifier() {
    return this.round_to_precision(this._modifier)
  }

  /**
   * Get the total modifier value of the stat rounded
   * to the most precice value given.
   */
  get value() {
      return this.round_to_precision(this.base * (1 + this.modifier))
  }

  /**
   * Rounds a value to the most precice value given
   */
  private round_to_precision(value: number) {
    const precision = 10 ** this._precision
    return (Math.round(value * precision) / precision)
  }

  /**
   * Update the internal precision property if the value given
   * is more precise than the previously most precie value.
   */
  private save_precision(value: number) {
    const test_precision = this.determine_precision(value)
    if(test_precision > this._precision) {
      this._precision = test_precision
    }
  }

  /**
   * Determine the number of digits after the decimal a number
   * has.
   * From: http://stackoverflow.com/questions/10454518/
   */
  private determine_precision(value: number) {
    const match = ('' + value).match(PRECISION_REGEX);
    if (!match) {
      return 0;
    } else {
      return Math.max(0,
      (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0))
    }
  }

}

export { BaseStat }
