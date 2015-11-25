import { BasePolarity } from '../../src/polarities/base_polarity'

describe('BasePolarity', () => {
  describe('#multiplier', () => {
    it('has a multiplier', () => {
      const base_polarity = new BasePolarity
      expect(base_polarity.multiplier).to.exist
    })

    it('is an integer', () => {
      const base_polarity = new BasePolarity
      const multiplier = base_polarity.multiplier
      expect(multiplier).to.eq(Math.floor(multiplier))
    })
  })
})
