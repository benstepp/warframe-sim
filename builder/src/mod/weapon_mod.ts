import { Mod } from './mod'

/**
 * An interface for the function accept_damage_set.
 * This function mutates a damage set and returns it.
 * The behavior of the mod can be encapsulated in the
 * class instead of elsewhere
 */
interface AcceptWeapon {
  (weapon: any): any
}

/**
 * A DamageMod must accept a damage set
 */
interface WeaponMod extends Mod {
  accept: AcceptWeapon
}

export { WeaponMod }
