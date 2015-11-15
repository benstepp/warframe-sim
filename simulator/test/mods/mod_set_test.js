import ModSet from '../../src/mods/mod_set'

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
const mocked_mod_b = { polarity: 'some_polarity', drain: 12 }

describe('ModSet', () => {
  it('saves the default polarities from a weapon', () => {
    const mod_set = new ModSet(mocked_polarities)
    expect(mod_set.default_polarities).to.eq(mocked_polarities)
  })

  it('has a set of current polarities', () => {
    const mod_set = new ModSet(mocked_polarities)
    expect(mod_set.current_polarities).to.exist
  })

  it('has current polarities in the same quantity as the default', () => {
    const mod_set = new ModSet(mocked_polarities)
    expect(Object.keys(mod_set.current_polarities).length)
      .to.eq(Object.keys(mocked_polarities).length)
  })

  describe('change_polarity', () => {
    it('changes the current polarities', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.change_polarity('new_polarity', 4)
      expect(mod_set.current_polarities).to.not.eq(mocked_polarities)
    })

    it('does not change the default polarities', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.change_polarity('new_polarity', 4)
      expect(mod_set.default_polarities).to.eq(mocked_polarities)
    })
  })

  describe('restore_polarity', () => {
    it('changes the polarity back the the default', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.restore_polarity(4)
      expect(mod_set.current_polarities[4]).to.eq(mocked_polarities[4])
    })

    it('does not change the default polarities', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.change_polarity('new_polarity', 4)
      mod_set.restore_polarity(0)
      expect(mod_set.default_polarities).to.eq(mocked_polarities)
    })

    it('does not change the polarities of other slots', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.change_polarity('new_polarity', 4)
      mod_set.restore_polarity(0)
      expect(mod_set.current_polarities[4]).to.eq('new_polarity')
    })
  })

  describe('used_capacity', () => {
    it('returns an integer', () => {
      const mod_set = new ModSet(mocked_polarities)
      const used_capacity = mod_set.used_capacity
      expect(used_capacity).to.be.a('number')
      expect(Math.floor(used_capacity)).to.eq(used_capacity)
    })

    it('returns zero for a new instance', () => {
      const mod_set = new ModSet(mocked_polarities)
      expect(mod_set.used_capacity).to.eq(0)
    })
  })

  describe('mods', () => {
    it('retuns an set of mods', () => {
      const mod_set = new ModSet(mocked_polarities)
      expect(mod_set.mods).to.be.a('object')
    })

    it('it has the same keys as the polarities', () => {
      const mod_set = new ModSet(mocked_polarities)
      expect(Object.keys(mod_set.mods)).to.be.eql(Object.keys(mocked_polarities))
    })
  })

  describe('add_mod', () => {
    it('adds to the given mod set', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.add_mod(mocked_mod, 1)
      expect(mod_set.mods[1]).to.eq(mocked_mod)
    })

    it('does not change other mods', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.add_mod(mocked_mod, 1)
      const default_mods = (new ModSet(mocked_polarities)).mods
      delete default_mods[1]
      expect(mod_set.mods).to.include(default_mods)
    })
  })

  describe('change_mod', () => {
    it('changes the given mod set', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.add_mod(mocked_mod, 1)
      mod_set.change_mod(mocked_mod_b, 1)
      expect(mod_set.mods[1]).to.eq(mocked_mod_b)
    })

    it('does not change other mods', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.change_mod(mocked_mod, 1)
      const default_mods = (new ModSet(mocked_polarities)).mods
      delete default_mods[1]
      expect(mod_set.mods).to.include(default_mods)
    })
  })

  describe('remove_mod', () => {
    it('removes a mod from the set', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.add_mod(mocked_mod, 'aura')
      mod_set.remove_mod('aura')
      expect(mod_set.mods.aura).to.eq(undefined)
    })

    it('doesnt remove other mods', () => {
      const mod_set = new ModSet(mocked_polarities)
      mod_set.add_mod(mocked_mod, 1)
      mod_set.add_mod(mocked_mod, 'aura')
      mod_set.remove_mod('aura')
      expect(mod_set.mods[1]).to.eq(mocked_mod)
    })
  })

})
