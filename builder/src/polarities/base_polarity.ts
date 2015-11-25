import { Polarity } from './polarity'

/**
 * A Variable to store the instances of the polarities.
 * The constructor of the polarity is given as a key. By
 * using instances we can reduce the object count
 */
const instances = new WeakMap()

/**
 * The base polarity which all polarities inherit from.
 * It handles the singletone behavior and default multiplier
 * for the polarities.
 */
class BasePolarity implements Polarity {
  multiplier: number

  /**
   * A new Polarity will return the singleton instance of
   * a given class constructor. It will call to create one if
   * it does not exist.
   */
  constructor() {
    let instance = instances.get(this.constructor)
    if (instance === void 0) instance = this.initialize()
    return instance
  }

  /**
   * Private function which creates the polarity if it doesnt
   * exist. This function is overwritten in the case of a polarity
   * having a different multiplier
   */
  private initialize() {
      this.set_multiplier()
      this.save_instance()
      return this
  }

  /**
   * Sets the multiplier of the polarity. Overwrite if polarity
   * has a different multiplier, as is the case for a null
   * polarity.
   */
  set_multiplier() {
    this.multiplier = 2
  }

  /**
   * Saves the instance of a class constructor to the instances
   * WeakMap.
   */
  private save_instance() {
    instances.set(this.constructor, this)
  }

}

export { BasePolarity }
