import { BaseSlot } from './base_slot'
import { Mod } from '../mods'
import { Slot } from './slot'
import { SlotSet } from './slot_set'
import { Polarity } from '../polarities'

class BaseSlotSet implements SlotSet {
  _slots: Map<any, Slot>

  constructor(base_slot_count?: number) {
    this.create_base_slots(base_slot_count || 0)
  }

  private create_base_slots(base_slot_count) {
    this._slots = new Map
    for(let i = 0; i < base_slot_count; i++) {
      this._slots.set(i, new BaseSlot)
    }
  }

  get slots() {
    return this._slots
  }

  set_polarity(key: any, polarity?: Polarity) {
    const slot = this._slots.get(key)
    slot.polarity = polarity
  }

  set_mod(key: any, mod?: Mod) {
    const slot = this._slots.get(key)
    slot.mod = mod
  }

  get used_capacity() {
    let used_capacity = 0
    this._slots.forEach(slot => {
      used_capacity += slot.used_capacity
    })
    return used_capacity
  }

}

export { BaseSlotSet }
