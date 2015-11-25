import { Singleton } from '../singleton'
import { Polarity } from './polarity'

class BasePolarity extends Singleton implements Polarity {
  multiplier: number

  initialize() {
    this.set_multiplier()
  }

  set_multiplier() {
    this.multiplier = 2
  }

}

export { BasePolarity }
