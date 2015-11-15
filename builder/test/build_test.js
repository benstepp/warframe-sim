import { Build } from '../src/'
import { Soma } from '../data'
import SlotSet from '../src/slots/slot_set'

const mocked_item = new Soma()

describe('Build', () => {
  it('it saves the given item', () => {
    const build = new Build(mocked_item)
    expect(build.item).to.eq(mocked_item)
  })

  it('has a slot set', () => {
    const build = new Build(mocked_item)
    expect(build.slot_set).to.be.instanceof(SlotSet)
  })

})
