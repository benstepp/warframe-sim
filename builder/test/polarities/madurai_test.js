import { Madurai } from '../../src/polarities'

describe('Madurai', () => {
  it('is equal to another instance', () => {
    const madurai_a = new Madurai()
    const madurai_b = new Madurai()
    expect(madurai_a.type).to.eq(madurai_b.type)
  })

  it('has a type of its own constructor', () => {
    const madurai = new Madurai()
    expect(madurai.type).to.eq('Madurai')
  })
})
