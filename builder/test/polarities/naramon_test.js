import { Naramon } from '../../src/polarities'

describe('Naramon', () => {
  it('is equal to another instance', () => {
    const naramon_a = new Naramon()
    const naramon_b = new Naramon()
    expect(naramon_a.type).to.eq(naramon_b.type)
  })

  it('has a type of its own constructor', () => {
    const naramon = new Naramon()
    expect(naramon.type).to.eq('Naramon')
  })
})
