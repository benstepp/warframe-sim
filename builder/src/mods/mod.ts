import { Polarity } from '../polarities'

interface Mod {
  _cost: number
  _max_rank: number
  _rank: number
  cost: number
  polarity: Polarity
  rank: number
}

export { Mod }
