import { WeaponSlotSet, BaseSlot } from '../../src/slots'

describe('WeaponSlotSet', () => {
  describe('slots', () => {
    it('has 8 slots', () => {
      const weapon_slot_set = new WeaponSlotSet
      const slots = weapon_slot_set.slots
      expect(slots.size).to.eq(8)
    })

    it('has base slots', () => {
      const weapon_slot_set = new WeaponSlotSet
      const slots = weapon_slot_set.slots.values()
      for(let slot of slots) {
        expect(slot).to.be.instanceof(BaseSlot)
      }
    })
  })
})

