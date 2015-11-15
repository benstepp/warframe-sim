import SlotSet from '../../src/slots/slot_set'
import ModSlot from '../../src/slots/mod_slot'

const mocked_mod = { name: 'Serration', drain: 9 }

describe('SlotSet', () => {
  it('is initialized with a number of default slots', () => {
    const slot_set = new SlotSet(10)
    expect(Object.keys(slot_set.slots).length).to.eq(10)
  })

  it('has a default of 8 slots for weapons', () => {
    const slot_set = new SlotSet()
    expect(Object.keys(slot_set.slots).length).to.eq(8)
  })

  it('contains mod slots', () => {
    const slot_set = new SlotSet()
    for (let key of slot_set.slots) {
      expect(slot_set.slots[key]).to.all.be.instanceof(ModSlot)
    }
  })

  describe('change_polarity', () => {
    it('changes the polarity of a slot', () => {
      const slot_set = new SlotSet()
      slot_set.change_polarity('new_polarity', 1)
      expect(slot_set.slots[1].polarity).to.eq('new_polarity')
    })
  })

  describe('change_mod', () => {
    it('changes the mod of a slot', () => {
      const slot_set = new SlotSet()
      slot_set.change_mod('new_mod', '5')
      expect(slot_set.slots['5'].mod).to.eq('new_mod')
    })
  })

  describe('used capacity', () => {
    it('returns an integer', () => {
      const slot_set = new SlotSet()
      const used_capacity = slot_set.used_capacity
      expect(Math.floor(used_capacity)).to.eq(used_capacity)
    })

    it('returns zero for a new instance', () => {
      const slot_set = new SlotSet()
      expect(slot_set.used_capacity).to.eq(0)
    })
  })

})
