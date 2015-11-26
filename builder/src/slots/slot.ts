import { Polarity } from '../polarities'
import { Mod } from '../mods'

interface SetPolarity {
  (polarity: Polarity): void
}

interface Slot {
  _polarity: Polarity
  _mod: Mod
}

export { Slot }
