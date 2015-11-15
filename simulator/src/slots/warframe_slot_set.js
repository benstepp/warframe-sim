import SlotSet from './slot_set'
import AuraSlot from './aura_slot'
import ExilusSlot from './exilus_slot'

class WarframeSlotSet extends SlotSet {

  constructor(length = 10) {
    super(length)
    this.slots.aura = new AuraSlot()
    this.slots.exilus = new ExilusSlot()
  }

}

export default WarframeSlotSet
