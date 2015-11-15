import ModSlot from '../../src/slots/mod_slot'
import { NullPolarity, Polarity } from '../../src/polarities'

const mocked_polarity = new Polarity()
const mocked_null_polarity = new NullPolarity()

const mocked_mod = { name: 'Serration', drain: 9, polarity: mocked_polarity }
const mocked_mod_unmatched = { drain: 9, polarity: mocked_null_polarity }

describe('ModSlot', () => {
  it('saves the polarity of the slot', () => {
    const mod_slot = new ModSlot(mocked_polarity, mocked_mod)
    expect(mod_slot.polarity).to.eq(mocked_polarity)
  })

  it('saves the mod in the slot', () => {
    const mod_slot = new ModSlot(mocked_polarity, mocked_mod)
    expect(mod_slot.mod).to.eq(mocked_mod)
  })

  it('has a default polarity of null_polarity', () => {
    const mod_slot = new ModSlot()
    expect(mod_slot.polarity).to.be.instanceof(NullPolarity)
  })

  describe('used_capacity', () => {
    it('returns an integer', () => {
      const mod_slot = new ModSlot(mocked_polarity, mocked_mod)
      const used_capacity = mod_slot.used_capacity
      expect(Math.floor(used_capacity)).to.eq(used_capacity)
    })

    it('returns a larger number with matching polarities', () => {
      const mod_slot = new ModSlot(mocked_polarity, mocked_mod)
      const used_capacity = mod_slot.used_capacity
      expect(used_capacity).to.be.above(mocked_mod.drain)
    })

    it('returns the same number with a null polarity', () => {
      const mod_slot = new ModSlot(mocked_null_polarity, mocked_mod)
      const used_capacity = mod_slot.used_capacity
      expect(used_capacity).to.be.eq(mocked_mod.drain)
    })

    it('returns a smaller number with unmatching polarities', () => {
      const mod_slot = new ModSlot(mocked_polarity, mocked_mod_unmatched)
      const used_capacity = mod_slot.used_capacity
      expect(used_capacity).to.be.below(mocked_mod.drain)
    })
  })

  describe('change_polarity', () => {
    it('changes to polarity', () => {
      const mod_slot = new ModSlot(mocked_polarity, mocked_mod)
      mod_slot.change_polarity(mocked_null_polarity)
      expect(mod_slot.polarity).to.eq(mocked_null_polarity)
    })
  })

})

