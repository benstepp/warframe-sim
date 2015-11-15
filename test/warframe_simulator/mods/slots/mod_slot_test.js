import ModSlot from '../../../../src/js/warframe_simulator/mods/slots/mod_slot'

const mocked_polarity = {
  name: 'attack_polarity',
  matched_multiplier: 2,
  unmatched_multiplier: 0.5
}

const mocked_null_polarity = {
  name: 'null_polarity',
  matched_multiplier: 1,
  unmatched_multiplier: 1
}

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

})

