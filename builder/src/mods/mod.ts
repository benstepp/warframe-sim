import { ModStrategy } from '../mod_strategies'
import { Polarity } from '../polarities'

interface GetModifier {
  (modifier: string): number
}

interface Mod {
  _cost: number
  _max_rank: number
  _rank: number
  cost: number
  polarity: Polarity
  rank: number
  strategies: ModStrategy[]
  get_modifier: GetModifier
}

export { Mod }
