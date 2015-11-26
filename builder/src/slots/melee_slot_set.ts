import { WeaponSlotSet } from './weapon_slot_set'
import { SlotSet } from './slot_set'
import { StanceSlot } from './stance_slot'

class MeleeSlotSet extends WeaponSlotSet implements SlotSet {

  /**
   * Melee weapons are the same as weapons with an
   * additional stance slot
   */
  constructor() {
    super()
    this._slots.set('stance', new StanceSlot)
  }

}

export { MeleeSlotSet }
