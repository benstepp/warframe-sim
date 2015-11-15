import SlotSet from './slot_set'
import StanceSlot from './stance_slot'

class MeleeSlotSet extends SlotSet {

  constructor(polarity_set) {
    this.stance = new StanceSlot()
    super(polarity_set)
  }

}

export default meleeSlotSet
