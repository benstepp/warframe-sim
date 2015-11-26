import { StanceSlot, BaseSlot } from '../../src/slots'

describe('StanceSlot', () => {
  it('is a BaseSlot', () => {
    const stance_slot = new StanceSlot
    expect(stance_slot).to.be.instanceof(BaseSlot)
  })
})
