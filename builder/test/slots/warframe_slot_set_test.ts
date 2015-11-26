import { WarframeSlotSet } from '../../src/slots'

describe('WarframeSlotSet', () => {
  describe('slots', () => {
    it('has 12 slots', () => {
      const warframe_slot_set = new WarframeSlotSet
      const slots = warframe_slot_set.slots
      expect(slots.size).to.eq(12)
    })

    it('has an aura slot', () => {
      const warframe_slot_set = new WarframeSlotSet
      expect(warframe_slot_set.slots.has('aura')).to.eq(true)
    })

    it('has an exilus slot', () => {
      const warframe_slot_set = new WarframeSlotSet
      expect(warframe_slot_set.slots.has('exilus')).to.eq(true)
    })
  })
})
