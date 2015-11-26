import { BasePolarity } from '../../src/polarities/base_polarity'
import { Koneksi, Madurai } from '../../src/polarities'

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

  describe('uniqueness of polarity', () => {
    it('is not the same as another polarity', () => {
      const koneksi = new Koneksi
      const madurai = new Madurai
      expect(koneksi).to.not.eq(madurai)
    })
  })
})

