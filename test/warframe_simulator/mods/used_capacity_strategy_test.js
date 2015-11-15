import UsedCapacityStrategy from '../../../src/js/warframe_simulator/mods/used_capacity_strategy'

const mocked_polarities = {
  aura: 'aura',
  stance: 'stance',
  exilus: 'exilus',
  '0': undefined,
  '1': undefined,
  '2': undefined,
  '3': undefined,
  '4': 'attack_polarity'
}

const mocked_mod = { polarity: 'null_polarity', drain: 9 }
const mocked_mods = {
  aura: mocked_mod
}

describe('UsedCapacityStrategy', () => {
  it('returns an integer', () => {
    const used = new UsedCapacityStrategy(mocked_polarities, mocked_mods)
    expect(used).to.be.a('number')
    expect(Math.floor(used)).to.eq(used)
  })

})
