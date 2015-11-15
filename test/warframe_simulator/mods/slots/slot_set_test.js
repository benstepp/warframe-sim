import SlotSet from '../../../../src/js/warframe_simulator/mods/slots/slot_set'
import ModSlot from '../../../../src/js/warframe_simulator/mods/slots/mod_slot'

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

})
