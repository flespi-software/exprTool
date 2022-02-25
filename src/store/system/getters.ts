import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { SystemStateInterface } from './state'

const getters: GetterTree<SystemStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
}

export default getters
