import { Mod } from './mod'
import { Singleton } from '../singleton'

/**
 * The BaseMod controls behavior shared across all mods.
 * This includes changing the rank of the mod
 */
class BaseMod implements Mod {
  cost: number
  max_rank: number
  rank: number
}

export { BaseMod }
