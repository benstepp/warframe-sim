import { Koneksi } from '../../src/polarities'

describe('Koneksi', () => {
  it('is equal to another instance', () => {
    const koneksi_a = new Koneksi()
    const koneksi_b = new Koneksi()
    expect(koneksi_a.type).to.eq(koneksi_b.type)
  })

  it('has a type of its own constructor', () => {
    const koneksi = new Koneksi()
    expect(koneksi.type).to.eq('Koneksi')
  })
})
