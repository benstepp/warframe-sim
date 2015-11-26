import { CritMultiplier } from '../../src/stats'

describe('CritMultiplier', () => {
  describe('value', () => {
    it('exists', () => {
      const crit_multiplier = new CritMultiplier
      expect(crit_multiplier.value).to.exist
    })

    it('is a number', () => {
      const crit_multiplier = new CritMultiplier
      expect(crit_multiplier.value).to.be.a('number')
    })

    it('returns the base multiplier if no modifiers', () => {
      const crit_multiplier = new CritMultiplier(0.3)
      expect(crit_multiplier.value).to.eq(0.3)
    })

    it('returns expeced with modifier', () => {
      const crit_multiplier = new CritMultiplier(1)
      crit_multiplier.modifier = 3
      expect(crit_multiplier.value).to.eq(1 * (1 + 3))
    })
  })

  describe('add_modifier', () => {
    it('correctly adds modifiers', () => {
      const crit_multiplier = new CritMultiplier
      crit_multiplier.add_modifier(1.2)
      crit_multiplier.add_modifier(0.6)
      expect(crit_multiplier.modifier).to.eq(1.8)
    })
  })
})
