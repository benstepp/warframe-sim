class Polarity {

  constructor() {
    this.multiplier = 2
  }

  get matched_multiplier() {
    return this.multiplier
  }

  get unmatched_multiplier() {
    return 1 / this.multiplier
  }

  get type() {
    return this.constructor.name
  }

}

export default Polarity
