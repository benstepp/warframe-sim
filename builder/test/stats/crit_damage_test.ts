import { CritDamage } from '../../src/stats'

describe('CritDamage', () => {
  describe('value', () => {
    it('exists', () => {
      const crit_damage = new CritDamage
      expect(crit_damage.value).to.exist
    })

    it('is a number', () => {
      const crit_damage = new CritDamage
      expect(crit_damage.value).to.be.a('number')
    })

    it('returns the base damage if no modifiers', () => {
      const crit_damage = new CritDamage(0.3)
      expect(crit_damage.value).to.eq(0.3)
    })

    it('returns expeced with modifier', () => {
      const crit_damage = new CritDamage(1)
      crit_damage.modifier = 3
      expect(crit_damage.value).to.eq(1 * (1 + 3))
    })
  })

  describe('add_modifier', () => {
    it('correctly adds modifiers', () => {
      const crit_damage = new CritDamage
      crit_damage.add_modifier(1.2)
      crit_damage.add_modifier(0.6)
      expect(crit_damage.modifier).to.eq(1.8)
    })
  })
})
