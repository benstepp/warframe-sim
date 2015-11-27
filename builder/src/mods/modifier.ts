class Modifier {
  base: number

  constructor(base?: number) {
    this.base = base || 0
  }

  value(rank) {
    return this.base * (1 + rank)
  }

}

export { Modifier }
