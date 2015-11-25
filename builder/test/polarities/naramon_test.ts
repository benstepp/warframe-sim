import { BasePolarity } from '../../src/polarities/base_polarity'
import { Naramon } from '../../src/polarities/naramon'

describe('Naramon', () => {
  it('is a base polarity', () => {
    const naramon = new Naramon
    expect(naramon).to.be.instanceof(BasePolarity)
  })

  describe('singleton behavior', () => {
    it('is the same as another of the same type', () => {
     const naramon_a = new Naramon
     const naramon_b = new Naramon
     expect(naramon_a).to.eq(naramon_b)
    })
  })

})

