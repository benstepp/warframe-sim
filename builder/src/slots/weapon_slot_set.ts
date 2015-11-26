import { BaseSlotSet } from './base_slot_set'
import { SlotSet } from './slot_set'

class WeaponSlotSet extends BaseSlotSet implements SlotSet {

  /**
   * Call the super method with 8 slots. This reflects
   * the in game behavior of weapon having 8 slots
   */
  constructor() {
    super(8)
  }

}

export { WeaponSlotSet }
