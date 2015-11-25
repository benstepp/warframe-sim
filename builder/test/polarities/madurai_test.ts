import { BasePolarity } from '../../src/polarities/base_polarity'
import { Madurai } from '../../src/polarities/madurai'

describe('Madurai', () => {
  it('is a base polarity', () => {
    const madurai = new Madurai
    expect(madurai).to.be.instanceof(BasePolarity)
  })

  describe('singleton behavior', () => {
    it('is the same as another of the same type', () => {
     const madurai_a = new Madurai
     const madurai_b = new Madurai
     expect(madurai_a).to.eq(madurai_b)
    })
  })

})

