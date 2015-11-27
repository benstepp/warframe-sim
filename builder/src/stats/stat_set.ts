import { Stat } from './stat'

class StatSet {
  _set: Map<string, Stat>

  constructor(stats: Array<Stat>) {
    stats.forEach(stat => {
      this._set.set(stat.constructor.name, stat)
    })
  }

  has(stat: string) {
    return this._set.has(stat)
  }

  get(stat: string) {
    return this._set.get(stat)
  }

}

export { StatSet }
