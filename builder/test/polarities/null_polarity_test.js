import { NullPolarity } from '../../src/polarities'

describe('NullPolarity', () => {
  it('has a multiplier of 1', () => {
    const null_polarity = new NullPolarity()
    expect(null_polarity.multiplier).to.eq(1)
  })

  it('has the same matched and unmatched multiplier', () => {
    const null_polarity = new NullPolarity()
    expect(null_polarity.matched_multiplier).to.eq(null_polarity.unmatched_multiplier)
  })

})
