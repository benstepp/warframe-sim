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

  describe('singleton behavior', () => {
    it('is the same as another of the same type', () => {
      const base_polarity_a = new BasePolarity
      const base_polarity_b = new BasePolarity
      expect(base_polarity_a).to.eq(base_polarity_b)
    })

    it('can be called as instance or new', () => {
      const base_polarity_a = BasePolarity.instance
      const base_polarity_b = new BasePolarity
      expect(base_polarity_a).to.eq(base_polarity_b)
    })
  })
})
