class UsedCapacityStrategy {

  constructor(polarities, mods) {
    this.polarities = polarities
    this.mods = mods
    return this.calculate_used_capacity()
  }

  calculate_used_capacity() {
    const mods = this._actual_mods
    return this._used_by_mods(mods)
  }

  get _actual_mods() {
    const mods = Object.assign({}, this.mods)
    for( let key of Object.keys(mods) ) {
      if (mods[key] === void 0) { delete mods[key] }
    }
    return mods
  }

  _used_by_mods(mods) {
    const total = 0
    for( let key of Object.keys(mods) ) {
      _drain_by_mod(this.polarities[key], mods[key])
    }
  }

  _drain_by_mod(polarity, mod) {
    //ask slot?
  }

}

export default UsedCapacityStrategy
