/**
 * A Variable to store the instances of the polarities.
 * The constructor of the polarity is given as a key. By
 * using instances we can reduce the object count
 */
const instances = new WeakMap()

class Singleton {

  /**
   * The constructor returns the instance of the class.
   * Singletons in the builder are used to represent items
   * that only exist in one form. For example, a Polarity is
   * always the same no matter how it is used
   */
  constructor() {
    let instance = instances.get(this.constructor)
    if (instance === void 0) {
     this.initialize()
     this.save_instance()
     instance = this
    }
    return instance
  }

  /**
   * Initialize function. Is a noop for this class, but
   * is expected to be overwritten in subclasses
   */
  initialize() {
  }

  /**
   * Saves the instance of a class constructor to the instances
   * WeakMap.
   */
  private save_instance() {
    instances.set(this.constructor, this)
  }

}

export { Singleton }
