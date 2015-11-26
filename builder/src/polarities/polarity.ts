interface SetMultiplier {
  (): void
}

interface Polarity {
  multiplier: number
  set_multiplier: SetMultiplier
}

export { Polarity }
