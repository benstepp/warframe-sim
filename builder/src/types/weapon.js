import Buildable from './buildable'
import { SlotSet } from '../slots'

class Weapon extends Buildable {

  set_default_slots() {
    this.slots = new SlotSet()
  }

}

export default Weapon
