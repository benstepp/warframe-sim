import { BasePolarity } from '../../src/polarities/base_polarity'
import { Madurai } from '../../src/polarities/madurai'

describe('Madurai', () => {
  it('is a base polarity', () => {
    const madurai = new Madurai
    expect(madurai).to.be.instanceof(BasePolarity)
  })
})

