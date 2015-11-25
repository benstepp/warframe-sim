import { BaseSlot } from '../../src/slots'
import { Madurai } from '../../src/polarities'

describe('BaseSlot', () => {
  it('has a polarity', () => {
    const base_slot = new BaseSlot
    expect(base_slot.polarity).to.exist
  })

  describe('set_polarity', () => {
    it('changes the polarity of the slot', () => {
      const base_slot = new BaseSlot
      const original_polarity = base_slot.polarity
      const changed_polarity = new Madurai
      base_slot.set_polarity(new Madurai)
      expect(base_slot.polarity).to.not.eq(original_polarity)
      expect(base_slot.polarity).to.eq(changed_polarity)
    })
  })
})

