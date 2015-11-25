import { Polarity } from './polarity'

class BasePolarity implements Polarity {
  multiplier: number

  constructor() {
    this.multiplier = 2
  }

}

export { BasePolarity }
