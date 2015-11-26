import { BaseMod } from '../../src/mods'

describe('BaseMod', () => {
  describe('increase_rank', () => {
    it('increases rank if not at max', () => {
      const base_mod = new BaseMod
      base_mod.rank = 1
      base_mod.max_rank = 10
      base_mod.increase_rank()
      expect(base_mod.rank).to.eq(2)
    })

    it('does not increase rank if at maximum', () => {
      const base_mod = new BaseMod
      base_mod.rank = 3
      base_mod.max_rank = 3
      base_mod.increase_rank()
      expect(base_mod.rank).to.eq(3)
    })
  })

  describe('decrease_rank', () => {
    it('decreases the rank if not at minimum', () => {
      const base_mod = new BaseMod
      base_mod.rank = 2
      base_mod.decrease_rank()
      expect(base_mod.rank).to.eq(1)
    })

    it('does not decrease rank at minimum', () => {
      const base_mod = new BaseMod
      base_mod.rank = 0
      base_mod.decrease_rank()
      expect(base_mod.rank).to.eq(0)
    })
  })

  describe('rank', () => {
    it('returns an integer', () => {
      const base_mod = new BaseMod
      const rank = base_mod.rank
      expect(Math.floor(rank)).to.eq(rank)
      expect(Math.ceil(rank)).to.eq(rank)
    })

    it('cannot be nagative', () => {
      const base_mod = new BaseMod
      base_mod.rank = -12
      expect(base_mod.rank).to.not.eq(-12)
    })
  })


  describe('cost', () => {
    it('is an integer', () => {
      const base_mod = new BaseMod
      base_mod.cost = 1
      const cost = base_mod.cost
      expect(Math.floor(cost)).to.eq(cost)
      expect(Math.ceil(cost)).to.eq(cost)
    })

    it('is the sum of the cost and rank', () => {
      const base_mod = new BaseMod
      base_mod.cost = 4
      base_mod.rank = 5
      const cost = base_mod.cost
      expect(cost).to.eq(9)
    })
  })

})
