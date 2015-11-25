import { BasePolarity } from '../../src/polarities/base_polarity'
import { Koneksi } from '../../src/polarities/koneksi'

describe('Koneksi', () => {
  it('is a base polarity', () => {
    const koneksi = new Koneksi
    expect(koneksi).to.be.instanceof(BasePolarity)
  })
})

