import { BasePolarity } from '../../src/polarities/base_polarity'
import { Koneksi } from '../../src/polarities/koneksi'

describe('Koneksi', () => {
  it('is a base polarity', () => {
    const koneksi = new Koneksi
    expect(koneksi).to.be.instanceof(BasePolarity)
  })

  describe('singleton behavior', () => {
    it('is the same as another of the same type', () => {
     const koneksi_a = new Koneksi
     const koneksi_b = new Koneksi
     expect(koneksi_a).to.eq(koneksi_b)
    })
  })
})

