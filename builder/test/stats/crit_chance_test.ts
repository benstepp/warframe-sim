import { CritChance } from '../../src/stats'

describe('CritChance', () => {
  describe('value', () => {
    it('exists', () => {
      const crit_chance = new CritChance
      expect(crit_chance.value).to.exist
    })

    it('is a number', () => {
      const crit_chance = new CritChance
      expect(crit_chance.value).to.be.a('number')
    })

    it('returns the base chance if no modifiers', () => {
      const crit_chance = new CritChance(0.3)
      expect(crit_chance.value).to.eq(0.3)
    })

    it('returns expeced with modifier', () => {
      const crit_chance = new CritChance(1)
      crit_chance.modifier = 3
      expect(crit_chance.value).to.eq(1 * (1 + 3))
    })
  })

  describe('add_modifier', () => {
    it('correctly adds modifiers', () => {
      const crit_chance = new CritChance
      crit_chance.add_modifier(1.5)
      crit_chance.add_modifier(0.48)
      expect(crit_chance.modifier).to.eq(1.98)
    })
  })
})
