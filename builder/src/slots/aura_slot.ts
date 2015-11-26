import { BaseSlot } from './base_slot'
import { Slot } from './slot'

class AuraSlot extends BaseSlot implements Slot {

  get used_capacity() {
    return this.get_used_capacity()
  }

}

export { AuraSlot }
