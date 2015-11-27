interface AddModifier {
  (modifier: number): void
}

interface Stat {
  add_modifier: AddModifier
  value: number
}

export { Stat }
