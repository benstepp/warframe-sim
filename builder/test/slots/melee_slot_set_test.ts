import { MeleeSlotSet } from '../../src/slots'

describe('MeleeSlotSet', () => {
  describe('slots', () => {
    it('has 9 slots', () => {
      const melee_slot_set = new MeleeSlotSet
      expect(melee_slot_set.slots.size).to.eq(9)
    })

    it('has a stance slot', () => {
      const melee_slot_set = new MeleeSlotSet
      expect(melee_slot_set.slots.has('stance')).to.eq(true)
    })
  })
})
