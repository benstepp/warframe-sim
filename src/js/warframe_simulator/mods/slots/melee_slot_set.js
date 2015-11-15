import SlotSet from './slot_set'
import StanceSlot from './stance_slot'

class MeleeSlotSet extends SlotSet {

  constructor() {
    super()
    this.stance = new StanceSlot()
  }

}

export default meleeSlotSet
