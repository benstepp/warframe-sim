import { Polarity } from '../polarities'
import { Mod } from '../mods'

interface SetPolarity {
  (polarity: Polarity): void
}

interface Slot {
  _polarity: Polarity
  _mod: Mod
  polarity: Polarity
  mod: Mod
  used_capacity: number
  matched_capacity: number
  unmatched_capacity: number

}

export { Slot }
