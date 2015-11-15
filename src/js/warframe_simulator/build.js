import ModSet from './mods/mod_set'

class Build {

  constructor(item) {
    this.item = item
    this.mod_set = new ModSet(item.default_polarities)
  }

}

export default Build
