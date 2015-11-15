class ModSet {

  constructor(default_polarities) {
    this.default_polarities = default_polarities
    this.current_polarities = Object.assign({}, default_polarities)
    this.mods = this._generate_mods(default_polarities)
  }

  change_polarity(new_polarity, key) {
    this.current_polarities[key] = new_polarity
  }

  restore_polarity(index) {
    this.current_polarities[index] = this.default_polarities[index]
  }

  add_mod(mod, key) {
    this.change_mod(mod, key)
  }

  change_mod(mod, key) {
    this.mods[key] = mod
  }

  remove_mod(key) {
    this.change_mod(undefined, key)
  }

  get used_capacity() {
    return 0
  }

  _generate_mods(default_polarities) {
    const mods = Object.assign({}, default_polarities)
    for( let key of Object.keys(mods) ) {
      mods[key] = undefined
    }
    return mods
  }

}

export default ModSet
