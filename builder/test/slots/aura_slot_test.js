import AuraSlot from '../../src/slots/aura_slot'
import { Polarity, NullPolarity } from '../../src/polarities'

const mocked_polarity = new Polarity()
const mocked_null_polarity = new NullPolarity()

const mocked_mod = { name: 'Serration', drain: -9, polarity: mocked_polarity }
const mocked_mod_unmatched = { drain: -9, polarity: mocked_null_polarity }

describe('AuraSlot', () => {
  describe('used_capacity', () => {
    it('returns a negative number', () => {
      const aura_slot = new AuraSlot(mocked_polarity, mocked_mod)
      const used_capacity = aura_slot.used_capacity
      expect(used_capacity).to.be.below(0)
    })

    it('returns a smaller number with matching polarities', () => {
      const aura_slot = new AuraSlot(mocked_polarity, mocked_mod)
      const used_capacity = aura_slot.used_capacity
      expect(used_capacity).to.be.below(mocked_mod.drain)
    })

    it('returns the same number with a null polarity', () => {
      const aura_slot = new AuraSlot(mocked_null_polarity, mocked_mod)
      const used_capacity = aura_slot.used_capacity
      expect(used_capacity).to.be.eq(mocked_mod.drain)
    })

    it('returns a larger number with unmatching polarities', () => {
      const aura_slot = new AuraSlot(mocked_polarity, mocked_mod_unmatched)
      const used_capacity = aura_slot.used_capacity
      expect(used_capacity).to.be.above(mocked_mod.drain)
    })
  })

})
