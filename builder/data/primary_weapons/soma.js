import { Madurai } from '../../src/polarities'
import { BulletRifle } from '../../src/types'

class Soma extends BulletRifle {

  set_default_polarities() {
    this.default_slots.change_polarity(new Madurai, 5)
    this.default_slots.change_polarity(new Madurai, 6)
  }

}

export default Soma
