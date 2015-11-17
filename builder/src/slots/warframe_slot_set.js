import SlotSet from './slot_set'
import AuraSlot from './aura_slot'
import ExilusSlot from './exilus_slot'

class WarframeSlotSet extends SlotSet {

  constructor(length = 10) {
    super(length)
    this.slots.set('aura', new AuraSlot())
    this.slots.set('exilus', new ExilusSlot())
  }

}

export default WarframeSlotSet
