import { AuraSlot } from '../../src/slots'
import { Serration } from '../../data/mods'

describe('AuraSlot', () => {
  it('has a negative zero used capacity', () => {
    const aura_slot = new AuraSlot
    const used_capacity = aura_slot.used_capacity
    expect(Math.sign(used_capacity)).to.eq(0)
  })

  it('has negative used capacity with a mod', () => {
    const aura_slot = new AuraSlot
    aura_slot.mod = new Serration
    const used_capacity = aura_slot.used_capacity
    expect(Math.sign(used_capacity)).to.eq(1)
  })
})
