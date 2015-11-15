import { Build } from '../../src/js/warframe_simulator'

const mocked_item = {
  default_polarities: new Array(8)
}

describe('Build', () => {
  it('it saves the given item', () => {
    const build = new Build(mocked_item)
    expect(build.item).to.eq(mocked_item)
  })

  it('has a mod set', () => {
    const build = new Build(mocked_item)
    expect(build.mod_set).to.exist
  })
})
