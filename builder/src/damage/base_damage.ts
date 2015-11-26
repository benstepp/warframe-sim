import { Damage } from './damage'

class BaseDamage implements Damage {
  base: number
  modified: number

  constructor(base_damage?: number) {
    this.base = base_damage || 0
  }

}

export { BaseDamage }
