import { BasePolarity } from '../../src/polarities/base_polarity'
import { Naramon } from '../../src/polarities/naramon'

describe('Naramon', () => {
  it('is a base polarity', () => {
    const naramon = new Naramon
    expect(naramon).to.be.instanceof(BasePolarity)
  })
})

