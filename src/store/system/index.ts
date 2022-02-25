import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { SystemStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const systemModule: Module<SystemStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default systemModule
