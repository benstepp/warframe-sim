import { BaseSlotSet } from '../../src/slots'

describe('BaseSlotSet', () => {
  it('has slots', () => {
    const base_slot_set = new BaseSlotSet
    expect(base_slot_set.slots).to.exist
  })

  describe('get used_capacity', () => {
    it('returns an integer', () => {
      const base_slot_set = new BaseSlotSet
      const used_capacity = base_slot_set.used_capacity
      expect(Math.floor(used_capacity)).to.eq(used_capacity)
      expect(Math.ceil(used_capacity)).to.eq(used_capacity)
    })

    it('is zero for a new set', () => {
      const base_slot_set = new BaseSlotSet
      const used_capacity = base_slot_set.used_capacity
      expect(used_capacity).to.eq(0)
    })
  })

})

