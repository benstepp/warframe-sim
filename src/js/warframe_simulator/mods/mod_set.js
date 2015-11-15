import UsedCapacityStrategy from './used_capacity_strategy'

/**
 * This class controls a set of mods for a buildable item
 */
class ModSet {

  /**
   * Save off a reference of the default polarities and
   * copy the default_polarities to the current_polarities
   *
   * @constructor
   * @param {PolaritySet} default_polarities - A Polarity set of defaults
   */
  constructor(default_polarities) {
    this.default_polarities = default_polarities
    this.current_polarities = Object.assign({}, default_polarities)
    this.mods = this._generate_mods(default_polarities)
  }

  /**
   * Change the polarity of a given index to a new type.
   *
   * @param {Polarity} new_polarity - A new polarity object
   * @param {number||string} key - The key to be mutated
   */
  change_polarity(new_polarity, key) {
    this.current_polarities[key] = new_polarity
  }

  /**
   * Restore the polarity from a given index. This reverts a polarity
   * back to its default value. To remove a polarity, from the slot
   * a null polarity is added to the change value. This is done to
   * closer mimic the affects of Forma on buildable items
   */
  restore_polarity(index) {
    this.current_polarities[index] = this.default_polarities[index]
  }

  /**
   * Add a mod to the mod set at the given key
   */
  add_mod(mod, key) {
    this.change_mod(mod, key)
  }

  /**
   * Change the mod at the key of the mods
   */
  change_mod(mod, key) {
    this.mods[key] = mod
  }

  /**
   * Remove a mod at a given key
   */
  remove_mod(key) {
    this.change_mod(undefined, key)
  }

  /**
   * Get the used capacity of the current mods on a given weapon set
   */
  get used_capacity() {
    return 0
  }

  /**
   * Copy the keys of the default_polarities to a blank mods object
   * set all of the keys to undefined to suggest that there are no mods
   */
  _generate_mods(default_polarities) {
    const mods = Object.assign({}, default_polarities)
    for( let key of Object.keys(mods) ) {
      mods[key] = undefined
    }
    return mods
  }

}

export default ModSet
