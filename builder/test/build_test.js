import { Build } from '../src/'
import { Soma } from '../data'
import SlotSet from '../src/slots/slot_set'

const mocked_item = new Soma()
const mocked_mod = { name: 'spaghetti mod' }

describe('Build', () => {
  it('it saves the given item', () => {
    const build = new Build(mocked_item)
    expect(build.item).to.eq(mocked_item)
  })

  it('has a slot set', () => {
    const build = new Build(mocked_item)
    expect(build.slot_set).to.be.instanceof(SlotSet)
  })

  it('has the same slots as the base item when constructed', () => {
    const build = new Build(mocked_item)
    expect(build.slot_set).to.be.eq(mocked_item.default_slots)
  })

  describe('add_mod', () => {
    it('adds a mod to a slot', () => {
      const build = new Build(mocked_item)
      build.add_mod(mocked_mod)
      expect(build.slot_set.includes_mod(mocked_mod)).to.eq(true)
    })

  })

})
