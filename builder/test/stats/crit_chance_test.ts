import { CriticalChance } from '../../src/stats'

describe('CriticalChance', () => {
  describe('value', () => {
    it('exists', () => {
      const critical_chance = new CriticalChance
      expect(critical_chance.value).to.exist
    })

    it('is a number', () => {
      const critical_chance = new CriticalChance
      expect(critical_chance.value).to.be.a('number')
    })

    it('returns the base chance if no modifiers', () => {
      const critical_chance = new CriticalChance(0.3)
      expect(critical_chance.value).to.eq(0.3)
    })

    it('returns expeced with modifier', () => {
      const critical_chance = new CriticalChance(1)
      critical_chance.modifier = 3
      expect(critical_chance.value).to.eq(1 * (1 + 3))
    })
  })

  describe('add_modifier', () => {
    it('correctly adds modifiers', () => {
      const critical_chance = new CriticalChance
      critical_chance.add_modifier(1.5)
      critical_chance.add_modifier(0.48)
      expect(critical_chance.modifier).to.eq(1.98)
    })
  })
})
