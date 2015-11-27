import { Mod } from '../mods'
import { StatSet } from '../stats'

interface CallStrategy {
  (mod: Mod, stat_set: StatSet): void
}

interface ExecuteStrategy {
  (mod: Mod, stat_set: StatSet): void
}

interface ModStrategy {
  call: CallStrategy
  execute: ExecuteStrategy
}

export { ModStrategy }
