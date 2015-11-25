import { Polarity } from '../polarities'

interface SetPolarity {
  (polarity: Polarity): void
}

interface Slot {
  polarity: Polarity
  set_polarity: SetPolarity
}

export { Slot }
