import { ElementalDamage } from '../damage'
import { Stat } from './stat'

class StatSet {
  _set: Map<string, Stat>

  constructor(stats: Array<Stat>) {
    stats.forEach(stat => {
      this._set.set(stat.constructor.name, stat)
    })
  }

  set(key: string, stat: Stat) {
    this._set.set(key, stat)
  }

  has(stat: string) {
    return this._set.has(stat)
  }

  get(stat: string) {
    return this._set.get(stat)
  }

  get elemental_damage() {
    const elements = []
    this._set.forEach((stat, key) => {
      if (stat instanceof ElementalDamage) elements.push(stat)
    })
    return elements
  }

}

export { StatSet }
