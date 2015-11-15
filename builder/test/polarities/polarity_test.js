import Polarity from '../../src/polarities/polarity'

describe('Polarity', () => {
  it('has a multiplier', () => {
    const polarity = new Polarity()
    expect(polarity.multiplier).to.exist
  })

  it('it has a type', () => {
    const polarity = new Polarity()
    expect(polarity.type).to.exist
  })

  describe('matched_multiplier', () => {
    it('is a number', () => {
      const polarity = new Polarity()
      expect(polarity.matched_multiplier).to.be.a('number')
    })

    it('is greater than zero', () => {
      const polarity = new Polarity()
      expect(polarity.matched_multiplier).to.be.above(0)
    })
  })

})
