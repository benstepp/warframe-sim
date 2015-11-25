import { Slot } from './slot'
import { Polarity, NullPolarity } from '../polarities'

class BaseSlot implements Slot {
  polarity: Polarity

  /**
   * Initialize with a polarity or set the polarity to
   * a null polarity to signify the lack of polarity
   */
  constructor(polarity?: Polarity) {
    this.polarity = polarity || new NullPolarity
  }

  /**
   * Sets the polarity of the slot. This method is called
   * if the polarity needs to change (eg. Forma)
   */
  set_polarity(polarity: Polarity) {
    this.polarity = polarity
  }

}

export { BaseSlot }
