import { ModStrategy } from './mod_strategy'
import { Stat, StatSet } from '../stats'
import { Mod } from '../mods'

/**
 * The BaseStrategy defines the most commonly used methods
 * by mods when implementing their strategies. The stats are
 * derived from the names of the subclasses. The methods may
 * be overridden if a stat requires more complex transfomation
 */
class BaseStrategy implements ModStrategy {

  /**
   * Call the strategy. This is the external interface of
   * the strategy. It checks that the stat exists on the
   * stat set and applies the given strategy to that
   * stat. Some Strategies may need to overwrite this.
   */
  call(mod: Mod, stat_set: StatSet) {
    if (stat_set.has(this.stat)) {
      this.execute(mod, stat_set)
    }
  }

  /**
   * Get the name of the stat this strategy applies to. Used
   * to pull the stat from a stat set and the modifier from
   * the mod.
   */
  get stat() {
    return this.constructor.name.split('Strategy')[0]
  }

  /**
   * Execute a Strategy by applying a mod's modifier to
   * the stat in which it modifies. Most mods follow this
   * pattern, but some (like elemental mods) require the
   * entire stat_set to correctly apply their transforms
   */
  execute(mod: Mod, stat_set: StatSet) {
    const stat = stat_set.get(this.stat)
    const modifier = mod.get_modifier(this.stat)
    stat.add_modifier(modifier)
  }

}

export { BaseStrategy }
