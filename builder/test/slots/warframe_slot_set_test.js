import WarframeSlotSet from '../../src/slots/warframe_slot_set'
import ModSlot from '../../src/slots/mod_slot'

describe('WarframeSlotSet', () => {
  it('has a default of 12 slots for 10 + aura + exilus', () => {
    const slot_set = new WarframeSlotSet()
    expect(Object.keys(slot_set.slots).length).to.eq(12)
  })

  it('contains mod slots', () => {
    const slot_set = new WarframeSlotSet()
    for (let key of slot_set.slots) {

      expect(slot_set.slots[key]).to.all.be.instanceof(ModSlot)
    }
  })

  it('has an aura slot', () => {
    const slot_set = new WarframeSlotSet()
    expect(slot_set.slots.has('aura')).to.eq(true)
  })

  it('has an exilus slot', () => {
    const slot_set = new WarframeSlotSet()
    expect(slot_set.slots.has('exilus')).to.eq(true)
  })
})
