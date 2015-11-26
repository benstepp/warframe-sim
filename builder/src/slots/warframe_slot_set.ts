import { SlotSet } from './slot_set'
import { BaseSlotSet } from './base_slot_set'
import { AuraSlot } from './aura_slot'
import { ExilusSlot } from './exilus_slot'

class WarframeSlotSet extends BaseSlotSet implements SlotSet{

  constructor() {
    super(10)
    this._slots.set('aura', new AuraSlot)
    this._slots.set('exilus', new ExilusSlot)
  }

}

export { WarframeSlotSet }
