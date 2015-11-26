import { BaseMod } from '../../src/mods'

describe('BaseMod', () => {
  describe('increase_rank', () => {
    it('increases rank if not at max', () => {
      const base_mod = new BaseMod
      base_mod._rank = 1
      base_mod._max_rank = 10
      base_mod.increase_rank()
      expect(base_mod.rank).to.eq(2)
    })

    it('does not increase rank if at maximum', () => {
      const base_mod = new BaseMod
      base_mod._rank = 3
      base_mod._max_rank = 3
      base_mod.increase_rank()
      expect(base_mod.rank).to.eq(3)
    })
  })

  describe('decrease_rank', () => {
    it('decreases the rank if not at minimum', () => {
      const base_mod = new BaseMod
      base_mod._rank = 2
      base_mod.decrease_rank()
      expect(base_mod.rank).to.eq(1)
    })

    it('does not decrease rank at minimum', () => {
      const base_mod = new BaseMod
      base_mod._rank = 0
      base_mod.decrease_rank()
      expect(base_mod.rank).to.eq(0)
    })
  })

})
