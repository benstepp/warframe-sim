import { BaseStrategy } from '../../src/mod_strategies'

describe('BaseStrategy', () => {
  describe('get stat', () => {
    it('returns Base', () => {
      const base_strategy = new BaseStrategy
      expect(base_strategy.stat).to.eq('Base')
    })
  })
})
