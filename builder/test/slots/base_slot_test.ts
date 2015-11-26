import { BaseSlot } from '../../src/slots'
import { Madurai, NullPolarity } from '../../src/polarities'
import { Serration } from '../../data/mods'
import { NullMod } from '../../src/mods'

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
      base_slot.polarity = changed_polarity
      expect(base_slot.polarity).to.not.eq(original_polarity)
      expect(base_slot.polarity).to.eq(changed_polarity)
    })
  })

  describe('set_mod', () => {
    it('changes the mod of the slot', () => {
      const base_slot = new BaseSlot
      const original_mod = base_slot.mod
      const changed_mod = new Serration
      base_slot.mod = changed_mod
      expect(base_slot.mod).to.not.eq(original_mod)
      expect(base_slot.mod).to.eq(changed_mod)
    })
  })

  describe('get used_capacity', () => {
    it('returns an integer', () => {
      const base_slot = new BaseSlot
      const used_capacity = base_slot.used_capacity
      expect(Math.floor(used_capacity)).to.eq(used_capacity)
    })
  })

})

