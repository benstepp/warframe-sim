import { BasePolarity } from './base_polarity'
import { Polarity } from './polarity'

/**
 * A null polarity is the polarity of a mod slot when there
 * is no polarity applied. It is a singleton like all other polarities
 */
class NullPolarity extends BasePolarity implements Polarity {

  constructor() {
    super()
  }

  /**
   * In the case of the lack of polarity mods do not have
   * a multiplier applied when calculating their cost.
   */
  set_multiplier() {
    this.multiplier = 1
  }

}

export { NullPolarity }
