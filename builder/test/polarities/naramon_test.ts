import { BasePolarity } from '../../src/polarities/base_polarity'
import { Koneksi, Naramon, Madurai } from '../../src/polarities'

describe('Naramon', () => {
  it('is a base polarity', () => {
    const naramon = new Naramon
    expect(naramon).to.be.instanceof(BasePolarity)
  })

  it('is not a madurai polarity', () => {
    const naramon = new Naramon
    const madurai = new Madurai
    expect(naramon).to.not.eq(madurai)
  })

  it('is not a koneksi polarity', () => {
    const naramon = new Naramon
    const koneksi = new Koneksi
    expect(naramon).to.not.eq(koneksi)
  })

  describe('singleton behavior', () => {
    it('is the same as another of the same type', () => {
     const naramon_a = new Naramon
     const naramon_b = new Naramon
     expect(naramon_a).to.eq(naramon_b)
    })
  })

})

